import { h } from 'preact'
import { useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './PivotTable.scss'
import { PivotTableContainer } from './PivotTableContainer'
import { PivotTableHeader } from './PivotTableHeader'
import { PivotTableHelper } from './PivotTableHelper'
import { PivotTableSelector } from './PivotTableSelector'

/**
 * @param {PivotTableProps} props
 * @return {*}
 * @constructor
 */
export const PivotTable = props => {
  const [{ fields, rows, columns, items, tree, editable }, setState] = useState(() => {
    const fields = PivotTableHelper.toFields(props.fields.all || [])
    const rows = PivotTableHelper.toRowFields(props.fields.rows || [])
    const columns = PivotTableHelper.toColumnFields(props.fields.columns || [], fields)
    const items = props.data

    return {
      fields,
      columns,
      rows,
      items,
      tree: PivotTableHelper.toRowUnits(items, rows, columns),

      editable: true
    }
  })

  const updateColumns = columns => setState(prev => ({
    ...prev,
    columns,
    tree: PivotTableHelper.toRowUnits(items, rows, columns)
  }))

  return (
    <div className={ComponentHelper.composeClass(
      'nbsp-ui-pivot-table',
      { use: 'nbsp-ui-pivot-table-editable', if: editable }
    )}>
      <PivotTableHeader
        fields={fields}
        rows={rows}
        columns={columns}
        tree={tree}
        editable={editable}
        onEditingRequest={() => setState(prev => ({ ...prev, editable: !prev.editable }))}
      />
      {editable && (
        <PivotTableSelector
          fields={fields}
          columns={columns}
          items={items}
          onChange={updateColumns}
        />
      )}
      <PivotTableContainer
        tree={tree}
        rows={rows}
        columns={columns}
      />
    </div>
  )
}