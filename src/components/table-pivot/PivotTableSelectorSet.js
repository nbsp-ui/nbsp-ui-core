import { h } from 'preact'
import { useState } from 'preact/hooks'
import AddIcon from '../../icons/add.svg'
import CheckIcon from '../../icons/check.svg'
import ColumnsIcon from '../../icons/columns.svg'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { SVGIcon } from '../icon-svg/SVGIcon'
import { PivotTableMethod } from './PivotTableMethod'
import { PivotTableSelectorColumn } from './PivotTableSelectorColumn'
import './PivotTableSelectorSet.scss'
import { PivotTableSelectorSuggest } from './PivotTableSelectorSuggest'

/**
 * @param props
 * @param {PivotTableField[]} props.fields
 * @param {PivotTableColumnField[]} props.columns
 * @param {Function} props.onChange
 * @returns {*}
 * @constructor
 */
export const PivotTableSelectorSet = ({ fields, columns, onChange }) => {
  const [suggested, setSuggested] = useState(false)
  const [draggedColumn, setDraggedColumn] = useState(null)

  /**
   * @param {PivotTableField} field
   */
  const addColumnFromField = field => {
    onChange([
      ...columns,
      {
        key: field.key,
        label: field.label,
        as: [PivotTableMethod.Count]
      }
    ].map((column, position) => ({ ...column, position })))
  }

  /**
   * @param {PivotTableField} field
   */
  const removeColumnFromField = field => {
    onChange(columns.filter(column => column.key !== field.key))
  }

  /**
   * @param {PivotTableField} field
   */
  const toggleColumnFromField = field => {
    columns.find(column => column.key === field.key)
      ? removeColumnFromField(field)
      : addColumnFromField(field)
  }

  const showSuggest = () => {
    setSuggested(true)
  }

  const hideSuggest = () => {
    setSuggested(false)
  }

  const toggleSuggest = () => suggested ? hideSuggest() : showSuggest()

  return (
    <div className="nbsp-ui-pivot-table-selector-set">
      <div className="icon">
        <SVGIcon icon={<ColumnsIcon/>}/>
      </div>
      <div className="menu">
        <div
          className={ComponentHelper.composeClass(
            'control',
            { use: 'control-confirmable', if: suggested }
          )}
          onClick={() => toggleSuggest()}
        >
          <SVGIcon icon={suggested ? <CheckIcon/> : <AddIcon/>}/>
        </div>
      </div>
      <div className="container">
        {suggested
          ? fields.map(field => (
            <PivotTableSelectorSuggest
              label={field.label}
              selected={!!columns.find(column => column.key === field.key)}
              onClick={() => toggleColumnFromField(field)}
            />
          ))
          : columns.map(column => (
            <PivotTableSelectorColumn
              column={column}
              dragged={column.key === draggedColumn?.key}
              droppable={draggedColumn && column.key !== draggedColumn.key}
              onChange={column => onChange(columns.map(each => each.key === column.key ? column : each))}
              onDragStart={() => setDraggedColumn(column)}
              onDragEnd={() => setDraggedColumn(null)}
              onDropLeftReady={() => {
                const from = columns.findIndex(each => each.key === draggedColumn.key)
                const to = columns.findIndex(each => each.key === column.key)
                from > to
                && onChange(CompatUtils.array.move(columns, from, to))
              }}
              onDropRightReady={() => {
                const from = columns.findIndex(each => each.key === draggedColumn.key)
                const to = columns.findIndex(each => each.key === column.key)
                from < to
                && onChange(CompatUtils.array.move(columns, from, to))
              }}
            />
          ))
        }
      </div>
    </div>
  )
}