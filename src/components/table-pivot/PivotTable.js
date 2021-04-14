import { h } from 'preact'
import { useState } from 'preact/hooks'
import { PivotTableContainer } from './PivotTableContainer'
import { PivotTableHeader } from './PivotTableHeader'
import { PivotTableHelper } from './PivotTableHelper'
import './PivotTable.scss'

/**
 * @param {PivotTableProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const PivotTable = props => {
  const [columns, setColumns] = useState(PivotTableHelper.toColumnFields(props.fields.columns || []))
  const [rows, setRows] = useState(PivotTableHelper.toRowFields(props.fields.rows || []))

  const [items, setItems] = useState(props.data)

  const [tree, setTree] = useState(PivotTableHelper.toRowUnits(items, rows, columns))

  return (
    <div className="nbsp-ui-pivot-table">
      {/*<PivotTableHeader
        items={items}
        columns={columns}
      />*/}
      <PivotTableContainer
        tree={tree}
        rows={rows}
        columns={columns}
      />
    </div>
  )
}