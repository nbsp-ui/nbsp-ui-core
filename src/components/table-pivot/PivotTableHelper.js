import { CompatUtils } from '../../utils/CompatUtils'
import { PivotTableMethod } from './PivotTableMethod'

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
   * @param {PivotTableField[]} fields
   * @return {PivotTableField[]}
   */
  toFields: fields => fields,

  /**
   * @param {(string | PivotTableColumnField)[]} columns
   * @param {PivotTableField[]} fields
   * @return {PivotTableColumnField[]}
   */
  toColumnFields: (columns, fields) => columns
    .map(column => typeof column === 'string' ? { key: column } : column)
    .map(({ key, as }) => ({
      key,
      label: PivotTableHelper.describeKey(key, fields),
      as: CompatUtils.array.from(as || [PivotTableMethod.Count])
    }))
    .map((column, position) => ({
      ...column,
      position
    })),

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
    const aggregate = (items, columns) => {
      return columns.reduce((result, { key, as }) => ({
        ...result,
        [key]: as.reduce((result, method) => {
          const initial = match(method, {
            _: 0
          })

          const operate = match(method, {
            [PivotTableMethod.Count]: result => result + 1,
            [PivotTableMethod.Sum]: (result, value) => result + (Number(value) || 0),
            [PivotTableMethod.Max]: (result, value) => Math.max(Number(value) || Number.NEGATIVE_INFINITY, result),
            [PivotTableMethod.Min]: (result, value) => Math.min(Number(value) || Number.POSITIVE_INFINITY, result)
          })

          return {
            ...result,
            [method]: items.reduce((result, item) => operate(result, item[key]), initial)
          }
        }, {})
      }), {})
    }

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
   * @param {{}[]} items
   * @returns {{}}
   */
  selectItemsKeys: items => items.reduce((result, item) => ({
    ...result,
    ...Object.keys(item).reduce((result, key) => ({
      ...result,
      [key]: true
    }), {})
  }), {}),

  /**
   * @param {string} key
   * @param {PivotTableField[]} fields
   * @returns {string}
   */
  describeKey: (key, fields) => fields.find(each => each.key === key)?.label || 'Неизвестное значение',

  /**
   * @param {number} method
   * @returns {string}
   */
  methodToLabel: method => match(method, {
    [PivotTableMethod.Count]: 'Кол-во',
    [PivotTableMethod.Sum]: 'Сумма',
    [PivotTableMethod.Max]: 'Макс',
    [PivotTableMethod.Min]: 'Мин'
  })
}