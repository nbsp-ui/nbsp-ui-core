import { h } from 'preact'
import './PivotTableHeaderItem.scss'

/**
 * @param props
 * @param {string} props.value
 * @param {PivotTableColumnField} props.field
 * @returns {JSX.Element}
 * @constructor
 */
export const PivotTableHeaderItem = ({ value, field }) => {
  return (
    <div className="nbsp-ui-pivot-table-header-item">
      <p>{value}</p>
    </div>
  )
}