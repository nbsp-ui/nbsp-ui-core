import { h } from 'preact'
import { PivotTableHelper } from './PivotTableHelper'
import './PivotTableSelector.scss'
import { PivotTableSelectorSet } from './PivotTableSelectorSet'

/**
 * @param props
 * @param {PivotTableField[]} props.fields
 * @param {PivotTableColumnField[]} props.columns
 * @param {{}[]} props.items
 * @param {Function} props.onChange
 * @returns {*}
 * @constructor
 */
export const PivotTableSelector = ({ fields, columns, items, onChange }) => {
  return (
    <div className="nbsp-ui-pivot-table-selector">
      <PivotTableSelectorSet
        fields={fields}
        columns={columns}
        onChange={onChange}
      />
    </div>
  )
}