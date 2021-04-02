import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Box } from '../box/Box'
import { TableColumnResizer } from './TableColumnResizer'

/**
 * @param props
 * @param {React.Ref<HTMLElement>} props.reference
 * @param {TableColumn} props.column
 * @param {{}[]} props.items
 * @param {boolean} props.resizable
 * @param {function(): void} props.onClick
 * @param (function(): void) props.onEnter
 * @param {function(): void} props.onLeave
 * @param {function(): void} props.onDragStart
 * @param {function(): void} props.onResizeStart
 * @param {function(size: number): void} props.onResizeEnd
 * @returns {JSX.Element}
 * @constructor
 */
export const TableColumnHeader = ({
                                    reference,
                                    column,
                                    items,
                                    resizable,
                                    onClick,
                                    onEnter,
                                    onLeave,
                                    onDragStart,
                                    onResizeStart,
                                    onResizeEnd
                                  }) => {
  const refresh = ReactHelper.useRefresh()
  const mouseDownX = React.useRef(0)
  const mouseDownY = React.useRef(0)
  const hovered = React.useRef(false)
  const dragged = React.useRef(false)
  const resizing = React.useRef(false)

  /**
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const elementRef = React.useRef()

  ReactHelper.registerGlobalMouseEventListener('mousedown', event => {
    if (!resizing.current && CompatUtils.math.isBelongToElementRect(event.clientX, event.clientY, elementRef.current.getBoundingClientRect())) {
      mouseDownX.current = event.clientX
      mouseDownY.current = event.clientY
      onClick()
      refresh()
    }
  })

  ReactHelper.registerGlobalMouseEventListener('mousemove', event => {
    if (CompatUtils.math.isBelongToElementRect(event.clientX, event.clientY, elementRef.current.getBoundingClientRect())) {
      if (!hovered.current) {
        hovered.current = true
        onEnter()
        refresh()
      }
    } else {
      if (hovered.current) {
        mouseDownX.current = 0
        mouseDownY.current = 0
        dragged.current = false
        hovered.current = false
        onLeave()
        refresh()
      }
    }

    if (hovered.current && !dragged.current && mouseDownX.current && mouseDownY.current && !resizing.current && CompatUtils.math.pointsDistance(event.clientX, event.clientY, mouseDownX.current, mouseDownY.current) >= 20) {
      dragged.current = true
      onDragStart && onDragStart()
      refresh()
    }

    if (resizable) {
      const rect = elementRef.current.getBoundingClientRect()
      if (CompatUtils.math.isBelongToCircle(event.clientX, event.clientY, rect.x + rect.width, rect.y + rect.height / 2, 20)) {
        if (!resizing.current) {
          resizing.current = true
          refresh()
        }
      } else {
        if (resizing.current) {
          resizing.current = false
          refresh()
        }
      }
    }
  })

  ReactHelper.registerGlobalMouseEventListener('mouseup', event => {
    if (CompatUtils.math.isBelongToElementRect(event.clientX, event.clientY, elementRef.current.getBoundingClientRect())) {
      mouseDownX.current = 0
      mouseDownY.current = 0
      dragged.current && (dragged.current = false)
      refresh()
    }
  })

  return (
    <Box
      className={
        ComponentHelper.composeClass(
          { use: 'clickable', if: column.sort },
          { use: 'hovered', if: hovered.current },
          { use: 'sorted-by-asc', if: column._sortedByAsc },
          { use: 'sorted-by-desc', if: column._sortedByDesc }
        )
      }
      reference={element => {
        elementRef.current = element
        reference(element)
      }}
      vAlign={CompatAlign.Center}
      width={column.width}
    >
      {column.header(items)}
      <TableColumnResizer
        column={column}
        active={resizing.current}
        onDragStart={onResizeStart}
        onDragEnd={size => {
          resizing.current = false
          onResizeEnd(size)
        }}
      />
    </Box>
  )
}
