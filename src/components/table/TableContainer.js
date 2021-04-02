import React from 'react'
import { Box } from '../box/Box'
import { TableRow } from './TableRow'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {{}[]} items
 * @returns {JSX.Element}
 * @constructor
 */
export const TableContainer = ({ columns, items }) =>
  <Box className='rows' vertical>
    {
      items.map((item, index) =>
        <TableRow
          key={index}
          columns={columns}
          item={item}
        />
      )
    }
  </Box>