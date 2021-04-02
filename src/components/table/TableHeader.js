import React from 'react'
import { ReactHelper } from '../../utils/ReactHelper'
import { Box } from '../box/Box'
import { TableColumnHeader } from './TableColumnHeader'
import { TableColumnShadow } from './TableColumnShadow'

/**
 * @param props
 * @param {TableColumn[]} props.columns
 * @param {{}[]} props.items
 * @param {number} props.headerHeight
 * @param {function(): void} props.onRefreshRequest
 * @param {function(column: TableColumn): void} props.onSortRequest
 * @returns {JSX.Element}
 * @constructor
 */
export const TableHeader = ({ columns, items, headerHeight, onRefreshRequest, onSortRequest }) => {
  const refresh = ReactHelper.useRefresh()

  /**
   * @type {React.MutableRefObject<TableColumn>}
   */
  const focusedColumn = React.useRef()

  /**
   * @type {React.MutableRefObject<TableColumn>}
   */
  const movingColumn = React.useRef()

  const resizing = React.useRef(false)

  return (
    <div className='header'>
      <Box className='container' height={headerHeight}>
        {
          columns.map((column, index) =>
            <TableColumnHeader
              key={index}
              reference={element => column._headerElement = element}
              column={column}
              items={items}
              resizable={!resizing.current}
              onClick={() => {
                column.sort && onSortRequest(column)
              }}
              onEnter={() => {
                focusedColumn.current = column
              }}
              onLeave={() => {
                column._id === focusedColumn.current?._id && (focusedColumn.current = null)
              }}
              onDragStart={() => {
                movingColumn.current = column
                refresh()
              }}
              onResizeStart={() => {
                resizing.current = true
                refresh()
              }}
              onResizeEnd={size => {
                const { resizedColumn, adjacentColumn, flexible } = columns.reduce((result, each, index, columns) => {
                  each._id === column._id && (result.resizedColumn = each)
                  each._id === column._id && (result.index = index)
                  index === result.index + 1 && each.width && (result.adjacentColumn = each)
                  index === result.index + 1 && [0, columns.length - 1].includes(index) && (result.flexible = true)
                  return result
                }, {})

                adjacentColumn && (adjacentColumn.width = flexible ? false : adjacentColumn.width + resizedColumn.width - size)
                resizedColumn && (resizedColumn.width = size)

                resizing.current = false
                onRefreshRequest()
              }}
            />
          )
        }
      </Box>
      <TableColumnShadow
        column={movingColumn.current}
        onDragEnd={() => {
          if (focusedColumn.current && movingColumn.current) {
            focusedColumn.current._position = [movingColumn.current._position, movingColumn.current._position = focusedColumn.current._position][0]
            columns.sort((a, b) => a._position - b._position)
            onRefreshRequest()
          }
          movingColumn.current = null
          refresh()
        }}
      />
    </div>
  )
}