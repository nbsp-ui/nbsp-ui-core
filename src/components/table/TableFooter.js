import { h } from 'preact'
import { HBox } from '../box-h/HBox'
import { TableColumnFooter } from './TableColumnFooter'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {{}[]} items
 * @param {number} footerHeight
 * @returns {*}
 * @constructor
 */
export const TableFooter = ({ columns, items, footerHeight }) =>
  <HBox className="footer" height={footerHeight}>
    {
      columns.map((column, index) =>
        <TableColumnFooter
          key={index}
          column={column}
          items={items}
        />
      )
    }
  </HBox>