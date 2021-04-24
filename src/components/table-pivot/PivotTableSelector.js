import { h } from 'preact'
import { useState } from 'preact/hooks'
import AddIcon from '../../icons/add.svg'
import CheckIcon from '../../icons/check.svg'
import ColumnsIcon from '../../icons/columns.svg'
import RowsIcon from '../../icons/rows.svg'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { Immutable } from '../../utils/Immutable'
import { SVGIcon } from '../icon-svg/SVGIcon'
import { PivotTableMethod } from './PivotTableMethod'
import './PivotTableSelector.scss'
import { PivotTableSelectorColumn } from './PivotTableSelectorColumn'
import { PivotTableSelectorRow } from './PivotTableSelectorRow'
import { PivotTableSelectorSuggest } from './PivotTableSelectorSuggest'

/**
 * @param props
 * @param {PivotTableField[]} props.fields
 * @param {PivotTableColumnField[]} props.rows
 * @param {PivotTableColumnField[]} props.columns
 * @param {Function} props.onColumnsChange
 * @param {Function} props.onRowsChange
 * @returns {*}
 * @constructor
 */
export const PivotTableSelector = ({ fields, rows, columns, onColumnsChange, onRowsChange }) => {
  const [columnsSuggested, setColumnsSuggested] = useState(false)
  const [rowsSuggested, setRowsSuggested] = useState(false)
  const [draggedColumn, setDraggedColumn] = useState(null)
  const [draggedRow, setDraggedRow] = useState(null)

  const addColumnByField = ({ key, label }) =>
    onColumnsChange([
      ...columns,
      { key, label, as: [PivotTableMethod.Count] }
    ].map((column, position) => ({ ...column, position })))

  const removeColumnByField = field =>
    onColumnsChange(Immutable.array.removeItem(columns, column => column.key === field.key))

  const toggleColumnByField = field =>
    columns.find(column => column.key === field.key)
      ? removeColumnByField(field)
      : addColumnByField(field)

  const addRowFromField = ({ key, label }) =>
    onRowsChange([
      ...rows,
      { key, label }
    ].map((row, position) => ({ ...row, position })))

  const removeRowByField = field =>
    onRowsChange(Immutable.array.removeItem(rows, row => row.key === field.key))

  const toggleRowByField = field =>
    rows.find(row => row.key === field.key)
      ? removeRowByField(field)
      : addRowFromField(field)

  return (
    <div className="nbsp-ui-pivot-table-selector">
      <div className="set">
        <div className="icon">
          <SVGIcon icon={<ColumnsIcon/>}/>
        </div>
        <div className="menu">
          <div
            className={ComponentHelper.composeClass(
              'control',
              { use: 'control-confirmable', if: columnsSuggested }
            )}
            onClick={() => setColumnsSuggested(!columnsSuggested)}
          >
            <SVGIcon icon={columnsSuggested ? <CheckIcon/> : <AddIcon/>}/>
          </div>
        </div>
        <div className="content">
          {columnsSuggested
            ? fields.map(field => (
              <PivotTableSelectorSuggest
                label={field.label}
                selected={!!columns.find(column => column.key === field.key)}
                onClick={() => toggleColumnByField(field)}
              />
            ))
            : columns.map(column => (
              <PivotTableSelectorColumn
                column={column}
                dragged={column.key === draggedColumn?.key}
                droppable={draggedColumn && column.key !== draggedColumn.key}
                onColumnChange={
                  column => onColumnsChange(Immutable.array.patchItem(
                    columns,
                    item => item.key === column.key,
                    item => ({ ...item, ...column })
                  ))
                }
                onDragStart={() => setDraggedColumn(column)}
                onDragEnd={() => setDraggedColumn(null)}
                onDropLeftReady={() => {
                  const from = columns.findIndex(each => each.key === draggedColumn.key)
                  const to = columns.findIndex(each => each.key === column.key)
                  from > to && onColumnsChange(CompatUtils.array.move(columns, from, to))
                }}
                onDropRightReady={() => {
                  const from = columns.findIndex(each => each.key === draggedColumn.key)
                  const to = columns.findIndex(each => each.key === column.key)
                  from < to && onColumnsChange(CompatUtils.array.move(columns, from, to))
                }}
              />
            ))
          }
        </div>
      </div>
      <div className="set">
        <div className="icon">
          <SVGIcon icon={<RowsIcon/>}/>
        </div>
        <div className="menu">
          <div
            className={ComponentHelper.composeClass(
              'control',
              { use: 'control-confirmable', if: rowsSuggested }
            )}
            onClick={() => setRowsSuggested(!rowsSuggested)}
          >
            <SVGIcon icon={rowsSuggested ? <CheckIcon/> : <AddIcon/>}/>
          </div>
        </div>
        <div className="content">
          {rowsSuggested
            ? fields.map(field => (
              <PivotTableSelectorSuggest
                label={field.label}
                selected={!!rows.find(row => row.key === field.key)}
                onClick={() => toggleRowByField(field)}
              />
            ))
            : rows.map(row => (
              <PivotTableSelectorRow
                row={row}
                dragged={row.key === draggedRow?.key}
                droppable={draggedRow && row.key !== draggedRow.key}
                onDragStart={() => setDraggedRow(row)}
                onDragEnd={() => setDraggedRow(null)}
                onDropLeftReady={() => {
                  const from = rows.findIndex(item => item.key === draggedRow.key)
                  const to = rows.findIndex(item => item.key === row.key)
                  from > to && onRowsChange(CompatUtils.array.move(rows, from, to))
                }}
                onDropRightReady={() => {
                  const from = rows.findIndex(item => item.key === draggedRow.key)
                  const to = rows.findIndex(item => item.key === row.key)
                  from < to && onRowsChange(CompatUtils.array.move(rows, from, to))
                }}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}