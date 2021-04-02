import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { Box } from '../box/Box'

/**
 * @param {TableColumn[]} columns
 * @param {{}} item
 * @returns {JSX.Element}
 * @constructor
 */
export const TableRow = ({ columns, item }) =>
  <Box>
    {
      columns.map(({ cell, width }, index) =>
        <Box
          key={index}
          vAlign={CompatAlign.Center}
          width={width}
        >{cell(item)}</Box>
      )
    }
  </Box>