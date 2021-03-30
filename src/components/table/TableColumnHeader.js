import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { Box } from '../box/Box'

/**
 * @param {React.Ref} reference
 * @param {TableColumn} column
 * @param {{}[]} items
 * @param {React.MouseEventHandler} onClick
 * @returns {JSX.Element}
 * @constructor
 */
export const TableColumnHeader = ({ reference, column, items, onClick }) =>
  <Box
    className={
      ComponentHelper.composeClass(
        { use: 'clickable sorted', if: column.sort },
        { use: 'sorted-by-asc', if: column._sortedByAsc },
        { use: 'sorted-by-desc', if: column._sortedByDesc }
      )
    }
    reference={reference}
    vAlign={CompatAlign.Center}
    width={column.width}
    onClick={onClick}
  >
    {column.header(items)}
  </Box>