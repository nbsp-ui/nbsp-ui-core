import { CompatUtils } from '../../utils/CompatUtils'
import { ColumnAggregation } from './ColumnAggregation'

export const PivotTableHelper = {

  /**
   * @param {{}[]} items
   * @return {PivotTableItem[]}
   */
  toItems: items => items.map(item => ({
    ...item,
    _id: CompatUtils.uid(),
    _opened: true
  })),

  /**
   * @param {(string | PivotTableColumnField)[]} columns
   * @return {PivotTableColumnField[]}
   */
  toColumnFields: columns => columns.map(column => typeof column === 'string' ? { key: column } : column),

  /**
   * @param {(string | PivotTableRowField)[]} rows
   * @return {PivotTableRowField[]}
   */
  toRowFields: rows => rows.map(row => typeof row === 'string' ? { key: row } : row),

  /**
   * @param a
   * @param b
   * @return {boolean}
   */
  isHasIntersectedKey: (a, b) => {
    for (const key in a) {
      // noinspection JSUnfilteredForInLoop
      if (b[key]) return true
    }
    return false
  },

  /**
   * @param {{}[]} items
   * @param {PivotTableColumnField[]} columns
   * @return {{}[]}
   */
  filterItemsByColumns: (items, columns) => {
    const keys = columns.map((result, column) => ({ ...result, [column.key]: true }), {})
    return items.filter(item => PivotTableHelper.isHasIntersectedKey(item, keys))
  },

  /**
   * @param {{}[]} items
   * @param {PivotTableColumnField[]} columns
   * @return {PivotTableUnit[]}
   */
  toColumnUnits: (items, columns) => {
    const fieldsByKey = columns.reduce((result, column) => ({ ...result, [column.key]: column }), {})
    const uniqueValues = items.reduce((result, item) => ({
      ...result,
      ...Object.keys(item).reduce((result, key) => ({ ...result, ...fieldsByKey[key] && { [item[key]]: fieldsByKey[key] } }), {})
    }), {})
    return Object.keys(uniqueValues).map(key => ({ value: key, field: uniqueValues[key] }))
  },

  /**
   * @param {{}[]} items
   * @param {PivotTableRowField[]} rows
   * @param {PivotTableColumnField[]} columns
   * @return {PivotTableContainerUnit[]}
   */
  toRowUnits: (items, rows, columns) => {
    const itemsByRowAndValue = rows.reduce((result, field) => ({
      ...result,
      [field.key]: items.reduce((result, item) => ({
        ...result,
        [item[field.key]]: [...result[item[field.key]] || [], item]
      }), {})
    }), {})

    const unitsByRow = Object.entries(itemsByRowAndValue).reduce((result, [key, itemsByValue]) => ({
      ...result,
      [key]: Object.entries(itemsByValue).map(([value, items]) => ({
        id: CompatUtils.uid(),
        value,
        items
      }))
    }), {})

    /**
     * @param {{}[]} items
     * @param {PivotTableColumnField[]} columns
     * @return {{}}
     */
    const aggregate = (items, columns) => columns.reduce((injection, { key, as }) => ({
      ...injection,
      [key]: items.reduce((result, item) => match(as, {
        [ColumnAggregation.Count]: result + 1,
        [ColumnAggregation.Sum]: result + Number(item[key])
      }), match(as, {
        [ColumnAggregation.Count]: 0,
        [ColumnAggregation.Sum]: 0
      }))
    }), {})

    /**
     * @param {PivotTableContainerUnit} unit
     * @param {{}[]} [items]
     * @param {number} [level]
     * @param {PivotTableRowField[]} rows
     */
    const compose = (unit, items, level, rows) => {
      items = items.filter(item => item[rows[level].key] === unit.value)

      return {
        ...unit,
        items,
        aggregations: aggregate(items, columns),
        ...level < rows.length - 1 && {
          children: unitsByRow[rows[level + 1].key]
            .map(child => compose(child, items, level + 1, rows))
        }
      }
    }

    const tree = Object.values(unitsByRow)[0].map(unit => compose(unit, unit.items, 0, rows))

    return tree
  },

  /**
   * Построить древовидное представление иерархической связи
   * @param {{}} param - Конфигурация построения
   * @param {{}[]} param.items - Линейное представление иерархической связи
   * @param {string} param.reference_key - Ключ определяющий идентификацию элемента
   * @param {string} param.parent_reference_key - Ключ определяющий идентификацию родительского элемента
   * @param {string} param.children_key - Ключ определяющий массив выделенных в ходе обработки дочерних элементов
   * @returns {[]} - Древовидное представление иерархической связи
   */
  build_tree({ items, reference_key, parent_reference_key, children_key }) {
    const map = Object.create(null)
    items.forEach(item => {
      // TODO: Maybe optimise section
      map[item[reference_key]] = { ...item }
      map[item[reference_key]][children_key] = []
      return map[item[reference_key]]
    })
    const tree = []
    items.forEach(item => item[parent_reference_key]
      ? map[item[parent_reference_key]][children_key].push(map[item[reference_key]])
      : tree.push(map[item[reference_key]]))
    return tree
  }
}