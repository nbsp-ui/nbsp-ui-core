import { h } from 'preact'
import { HBox } from '../box-h/HBox'
import { TableRow } from './TableRow'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {{}[]} items
 * @returns {*}
 * @constructor
 */
export const TableContainer = ({ columns, items }) =>
  <HBox className="rows" vertical>
    {
      items.map((item, index) =>
        <TableRow
          key={index}
          columns={columns}
          item={item}
        />
      )
    }
  </HBox>