import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './PivotTableHeaderCell.scss'

/**
 * @param props
 * @param {string} props.label
 * @returns {*}
 * @constructor
 */
export const PivotTableHeaderCell = ({ label }) => {
  return (
    <div
      className={ComponentHelper.composeClass(
        'nbsp-ui-pivot-table-header-cell'
      )}
    >
      <div className="content">
        <p>{label}</p>
      </div>
    </div>
  )
}