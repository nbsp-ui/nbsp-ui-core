import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './PivotTableSelectorSuggest.scss'

/**
 * @param props
 * @param {string} props.label
 * @param {boolean} props.selected
 * @returns {*}
 * @constructor
 */
export const PivotTableSelectorSuggest = ({ label, selected, onClick }) => {
  return (
    <div
      className={ComponentHelper.composeClass(
        'nbsp-ui-pivot-table-selector-suggest',
        selected && 'nbsp-ui-pivot-table-selector-suggest-selected'
      )}
      onClick={onClick}
    >
      <p>{label}</p>
    </div>
  )
}