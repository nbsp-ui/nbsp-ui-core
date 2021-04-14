import { h } from 'preact'
import './PivotTableContainer.scss'
import { PivotTableContainerItem } from './PivotTableContainerItem'
import { PivotTableHelper } from './PivotTableHelper'

/**
 * @param props
 * @param {{}} props.tree
 * @param {PivotTableRowField[]} props.rows
 * @param {PivotTableColumnField[]} props.columns
 * @return {*}
 * @constructor
 */
export const PivotTableContainer = ({ tree, rows, columns }) => {
  return (
    <div className='nbsp-ui-pivot-table-container'>
      {tree.map(unit => (
        <PivotTableContainerItem
          key={unit.id}
          unit={unit}
          rows={rows}
          columns={columns}
        />
      ))}
    </div>
  )
}