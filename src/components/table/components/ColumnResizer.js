import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import { CompatUtils } from '../../../utils/CompatUtils'
import { ReactHelper } from '../../../utils/ReactHelper'
import './ColumnResizer.sass'

/**
 * @param props
 * @param {TableColumn} props.column
 * @param {function(): void} props.onDragStart
 * @param {function(width: number): void} props.onDragEnd
 * @returns {*}
 * @constructor
 */
export const ColumnResizer = ({ column, onDragStart, onDragEnd }) => {
  const refresh = ReactHelper.useRefresh()

  const dragged = useRef(false)
  const offset = useRef(0)

  /**
   * @type {RefObject<HTMLElement>}
   */
  const element = useRef()

  ReactHelper.registerGlobalMouseEventListener('mousemove', ({ clientX, clientY }) => {
    if (column) {
      const elementRect = element.current.getBoundingClientRect()
      const parentRect = column._headerElement.getBoundingClientRect()
      if (dragged.current && CompatUtils.math.isBelongToElementRectWithIndent(clientX, clientY, elementRect, 20)) {
        offset.current = clientX - parentRect.x - parentRect.width
        refresh()
      }
    }
  })

  ReactHelper.registerGlobalMouseEventListener('mouseup', () => {
    if (column) {
      const elementRect = element.current.getBoundingClientRect()
      const parentRect = column._headerElement.getBoundingClientRect()

      if (dragged.current) {
        offset.current = 0
        dragged.current = false
        onDragEnd(Math.abs(elementRect.x - parentRect.x))
      }
    }
  })

  useEffect(() => offset.current = 0, [column])

  const parentRect = column && column._headerElement.getBoundingClientRect()

  return (
    <div
      className="nbsp-ui-table-column-resizer"
      style={{
        display: column ? 'block' : 'none',
        ...column && {
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