import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { Box } from '../box/Box'

/**
 * @param {TableColumn} column
 * @param {{}[]} items
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