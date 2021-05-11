import { h } from 'preact'
import { HBox } from '../box-h/HBox'
import { TableRow } from './TableRow'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {TableItem[] | {}[]} items
 * @param {function(item: TableItem): void} onItemClick
 * @returns {*}
 * @constructor
 */
export const TableContainer = ({ columns, items, style, onItemClick }) =>
  <HBox className="rows" style={style} vertical>
    {
      items.map((item, index) =>
        <TableRow
          key={index}
          columns={columns}
          item={item}
          onItemClick={onItemClick}
        />
      )
    }
  </HBox>