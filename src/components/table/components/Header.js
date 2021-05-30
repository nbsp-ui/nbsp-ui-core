import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { CompatUtils } from '../../../utils/CompatUtils'
import { ReactHelper } from '../../../utils/ReactHelper'
import { HBox } from '../../box-h/HBox'
import { ColumnHeader } from './ColumnHeader'
import { ColumnResizer } from './ColumnResizer'
import { ColumnShadow } from './ColumnShadow'
import './Header.sass'

/**
 * @param props
 * @param {TableColumn[]} props.columns
 * @param {{}[]} props.items
 * @param {number} props.headerHeight
 * @param {function(): void} props.onRefreshRequest
 * @param {function(column: TableColumn): void} props.onSortRequest
 * @returns {*}
 * @constructor
 */
export const Header = ({ columns, items, headerHeight, onRefreshRequest, onSortRequest }) => {
  const refresh = ReactHelper.useRefresh()

  /**
   * @type {RefObject<TableColumn>}
   */
  const focusedColumn = useRef()

  /**
   * @type {RefObject<TableColumn>}
   */
  const movingColumn = useRef()

  /**
   * @type {RefObject<TableColumn>}
   */
  const resizableColumn = useRef()

  /**
   * @type {RefObject<TableColumn>}
   */
  const resizingColumn = useRef()

  /**
   * @param {MouseEvent} event
   */
  const handleMouseMove = event => {
    if (!movingColumn.current) {
      const resizable = columns.find((column, index, columns) => {
        const rect = column._headerElement.getBoundingClientRect()
        return index !== columns.length - 1 && CompatUtils.math.isBelongToCircle(event.clientX, event.clientY, rect.x + rect.width, rect.y + rect.height / 2, 24)
      })

      if (resizable?._id !== resizableColumn.current?._id) {
        resizableColumn.current = resizable
        refresh()
      }
    }
  }

  const handleMouseLeave = () => {
    resizableColumn.current = null
    refresh()
  }

  return (
    <div
      className="nbsp-ui-table-header"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HBox className="container" height={headerHeight}>
        {
          columns.map((column, index) =>
            <ColumnHeader
              key={index}
              reference={element => column._headerElement = element}
              column={column}
              items={items}
              prevented={resizableColumn.current || movingColumn.current}
              onClick={() => {
                column.sort && onSortRequest(column)
              }}
              onEnter={() => focusedColumn.current = column}
              onLeave={() => column._id === focusedColumn.current?._id && (focusedColumn.current = null)}
              onDragStart={() => {
                movingColumn.current = column
                refresh()
              }}
            />
          )
        }
      </HBox>
      <ColumnResizer
        column={resizableColumn.current || resizingColumn.current}
        onDragStart={() => resizingColumn.current = resizableColumn.current}
        onDragEnd={size => {
          const { resizedColumn, adjacentColumn } = columns.reduce((result, each, index) => {
            each._id === resizingColumn.current._id && (result.resizedColumn = each)
            each._id === resizingColumn.current._id && (result.index = index)
            index === result.index + 1 && each.width && (result.adjacentColumn = each)
            return result
          }, {})

          adjacentColumn && (adjacentColumn.width = adjacentColumn.width + resizedColumn.width - size)
          resizedColumn && (resizedColumn.width = size)

          resizableColumn.current = null
          resizingColumn.current = null
          refresh()

          onRefreshRequest()
        }}
      />
      <ColumnShadow
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