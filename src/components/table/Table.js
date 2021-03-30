import React from 'react'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Box } from '../box/Box'
import './Table.scss'
import { TableColumnFooter } from './TableColumnFooter'
import { TableColumnHeader } from './TableColumnHeader'
import { TableColumnResizer } from './TableColumnResizer'
import { TableColumnRow } from './TableColumnRow'

/**
 * @param {TableProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Table = props => {
  const { headerHeight, footerHeight } = props

  const [columns, setColumns, columnsRef] = ReactHelper.useReferredState(props.columns.map(column => ({
    ...column,
    _id: CompatUtils.uid()
  })))
  const [items, setItems] = React.useState([...props.data])
  const [focusedColumn, setFocusedColumn] = React.useState()
  const [focusedColumnHeaderElement, setFocusedColumnHeaderElement] = React.useState()
  const [_, setAffectedColumn, affectedColumnRef] = ReactHelper.useReferredState()
  const [resizerDragged, setResizerDragged] = React.useState(false)

  const columnHeaderElements = React.useRef({})
  const mouseMoveTarget = React.useRef({})
  const resizerElement = React.useRef()

  const style = ComponentHelper.composeStyle(props)

  const sort = () => {
    const column = columns.find(column => column._sortedByAsc || column._sortedByDesc)
    column && (items.sort((a, b) => column._sortedByAsc ? column.sort(a, b) : -column.sort(a, b)) || true) && setItems([...items])
  }

  const handleColumnHeaderClick = column => {
    if (column.sort) {
      columns.filter(each => each._id !== column._id).forEach(another => another._sortedByAsc = another._sortedByDesc = false)

      match(true, {
        [column._sortedByAsc]: () => column._sortedByAsc = !(column._sortedByDesc = true),
        [column._sortedByDesc]: () => column._sortedByDesc = !(column._sortedByAsc = true),
        _: () => column._sortedByAsc = true
      })()

      setColumns([...columns])

      sort()
    }
  }

  const handleMouseMove = event => {
    if (!resizerDragged) {
      const { column, columnHeaderElement } = columns
        .map(column => ({ column, columnHeaderElement: columnHeaderElements.current[column._id] }))
        .find(({ _, columnHeaderElement }) => {
          const rect = columnHeaderElement.getBoundingClientRect()
          return CompatUtils.math.isBelongToCircle(event.clientX, event.clientY, rect.x + rect.width, rect.y + rect.height / 2, 20)
        }) || {}

      setFocusedColumn(column)
      setFocusedColumnHeaderElement(columnHeaderElement)
      setAffectedColumn(column)

      mouseMoveTarget.current = event.target
    }
  }

  const handleMouseLeave = () => {
    if (!resizerDragged) {
      setFocusedColumn(null)
      setFocusedColumnHeaderElement(null)
    }
  }

  return (
    <div
      className='nbsp-ui-table'
      style={style}
      onMouseMove={event => handleMouseMove(event)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {
        <TableColumnResizer
          reference={element => resizerElement.current = element}
          parent={focusedColumnHeaderElement}
          onDragStart={() => setResizerDragged(true)}
          onDragEnd={size => {
            const { column, adjacentColumn, flexible } = columnsRef.current.reduce((result, column, index, columns) => {
              column._id === affectedColumnRef.current._id && (result.column = column)
              column._id === affectedColumnRef.current._id && (result.index = index)
              index === result.index + 1 && column.width && (result.adjacentColumn = column)
              index === result.index + 1 && [0, columns.length - 1].includes(index) && (result.flexible = true)
              return result
            }, {})

            adjacentColumn && (adjacentColumn.width = flexible ? false : adjacentColumn.width + column.width - size)
            column && (column.width = size)

            setColumns([...columnsRef.current])
            setResizerDragged(false)
          }}
        />
      }
      <Box className='header' height={headerHeight}>
        {
          columns.map((column, index) =>
            <TableColumnHeader
              key={index}
              reference={element => columnHeaderElements.current[column._id] = element}
              column={column}
              items={items}
              onClick={() => handleColumnHeaderClick(column)}
            />
          )
        }
      </Box>
      <Box className='rows' vertical>
        {
          items.map((item, index) =>
            <TableColumnRow
              key={index}
              columns={columns}
              item={item}
            />
          )
        }
      </Box>
      {
        columns.find(column => column.footer)
        &&
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
      }
    </div>
  )
}