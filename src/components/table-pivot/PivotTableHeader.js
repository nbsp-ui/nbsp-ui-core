import { h } from 'preact'
import GearIcon from '../../icons/gear.svg'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { SVGIcon } from '../icon-svg/SVGIcon'
import './PivotTableHeader.scss'
import { PivotTableHeaderCell } from './PivotTableHeaderCell'
import { PivotTableHelper } from './PivotTableHelper'

/**
 * @param props
 * @param {PivotTableColumnField[]} props.columns
 * @param {boolean} props.editable
 * @param {Function} props.onEditingRequest
 * @returns {*}
 * @constructor
 */
export const PivotTableHeader = ({ columns, editable, onEditingRequest }) => {
  return (
    <div className={ComponentHelper.composeClass(
      'nbsp-ui-pivot-table-header',
      editable && 'nbsp-ui-pivot-table-header-editable'
    )}>
      <div className="base-cell">
        <div
          className={ComponentHelper.composeClass(
            'edit',
            editable && 'edit-on'
          )}
          onClick={() => onEditingRequest()}
        >
          <SVGIcon icon={<GearIcon/>}/>
        </div>
      </div>
      {columns.reduce((result, { key, as, label }) => [
        ...result,
        ...as.map(method => (
          <PivotTableHeaderCell
            label={`${label} [${PivotTableHelper.methodToLabel(method)}]`}
          />
        ))
      ], [])}
    </div>
  )
}