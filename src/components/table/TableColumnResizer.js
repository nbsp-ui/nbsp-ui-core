import React from 'react'
import { CompatUtils } from '../../utils/CompatUtils'
import { ReactHelper } from '../../utils/ReactHelper'

/**
 * @param props
 * @param {TableColumn} props.column
 * @param {boolean} props.active
 * @param {function(): void} props.onDragStart
 * @param {function(width: number): void} props.onDragEnd
 * @returns {JSX.Element}
 * @constructor
 */
export const TableColumnResizer = ({ column, active, onDragStart, onDragEnd }) => {
  const refresh = ReactHelper.useRefresh()

  const dragged = React.useRef(false)
  const offset = React.useRef(0)

  /**
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const element = React.useRef()

  ReactHelper.registerGlobalMouseEventListener('mousemove', ({ clientX, clientY }) => {
    if (active) {
      const elementRect = element.current.getBoundingClientRect()
      const parentRect = column._headerElement.getBoundingClientRect()
      if (dragged.current && CompatUtils.math.isBelongToElementRectWithIndent(clientX, clientY, elementRect, 20)) {
        offset.current = clientX - parentRect.x - parentRect.width
        refresh()
      }
    }
  })

  ReactHelper.registerGlobalMouseEventListener('mouseup', () => {
    if (active) {
      const elementRect = element.current.getBoundingClientRect()
      const parentRect = column._headerElement.getBoundingClientRect()

      if (dragged.current) {
        offset.current = 0
        dragged.current = false
        onDragEnd(Math.abs(elementRect.x - parentRect.x))
      }
    }
  })

  React.useEffect(() => offset.current = 0, [active])

  const parentRect = active && column._headerElement.getBoundingClientRect()

  return (
    <div
      className='resizer'
      style={{
        display: active ? 'block' : 'none',
        ...active && {
          left: `${parentRect.left + parentRect.width - 2 + offset.current}px`,
          top: `${parentRect.top + window.scrollY}px`,
          height: `${parentRect.height}px`
        }
      }}
      ref={element}
      draggable={false}
      onMouseDown={() => {
        dragged.current = true
        onDragStart()
      }}
    />
  )
}