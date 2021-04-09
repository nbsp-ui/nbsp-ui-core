import { h } from 'preact'
import { Box } from '../box/Box'
import { TableColumnFooter } from './TableColumnFooter'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {{}[]} items
 * @param {number} footerHeight
 * @returns {JSX.Element}
 * @constructor
 */
export const TableFooter = ({ columns, items, footerHeight}) =>
  <Box className='footer' height={footerHeight}>
    {
      columns.map((column, index) =>
        <TableColumnFooter
          key={index}
          column={column}
          items={items}
        />
      )
    }
  </Box>