import { h } from 'preact'
import { PivotTableHeaderItem } from './PivotTableHeaderItem'
import { PivotTableHelper } from './PivotTableHelper'
import './PivotTableHeader.scss'

/**
 * @param props
 * @param {{}} props.tree
 * @param {PivotTableColumnField[]} props.columns
 * @return {*}
 * @constructor
 */
export const PivotTableHeader = ({ tree, columns }) => {
  return (
    <div className="nbsp-ui-pivot-table-header">
      <div className="offset">
        <div className="fixed-offset"/>
        <div className="stretched-offset"/>
      </div>
      {
        columns.map(column => (
          <div>

          </div>
        ))
      }
    </div>
  )
}