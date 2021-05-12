import { h } from 'preact'
import { HBox } from '../box-h/HBox'
import { TableRow } from './TableRow'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {TableItem[] | {}[]} items
 * @param {number} rowHeight
 * @param {function(item: TableItem): void} onItemClick
 * @returns {*}
 * @constructor
 */
export const TableContainer = ({ columns, items, rowHeight, onItemClick }) =>
  <HBox className="rows" vertical>
    {
      items.map((item, index) =>
        <TableRow
          key={index}
          columns={columns}
          item={item}
          rowHeight={rowHeight}
          onItemClick={onItemClick}
        />
      )
    }
  </HBox>