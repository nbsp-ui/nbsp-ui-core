import { h } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { Box } from '../box/Box'

/**
 * @param props
 * @param {TableColumn} props.column
 * @param {{}[]} props.items
 * @returns {JSX.Element}
 * @constructor
 */
export const TableColumnFooter = ({ column, items }) =>
  <Box
    vAlign={CompatAlign.Center}
    width={column.width}
  >
    {column.footer && column.footer(items)}
  </Box>