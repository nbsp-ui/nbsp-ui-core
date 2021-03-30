import React from 'react'
import { CompatUtils } from '../../utils/CompatUtils'
import { ReactHelper } from '../../utils/ReactHelper'

/**
 * @param {React.Ref} reference
 * @param {HTMLElement} parent
 * @param {function(): void} onDragStart
 * @param {function(width: number): void} onDragEnd
 * @returns {JSX.Element}
 * @constructor
 */
export const TableColumnResizer = ({ reference, parent, onDragStart, onDragEnd }) => {
  const [, setDragged, draggedRef] = ReactHelper.useReferredState(false)
  const [offset, setOffset] = React.useState(0)

  /**
   *
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const elementRef = React.useRef()

  /**
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const parentRef = React.useRef()

  parentRef.current = parent

  const startDrag = () => {
    setDragged(true)
    onDragStart()
  }

  const endDrag = (size) => {
    setDragged(false)
    onDragEnd(size)
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    if (elementRef.current && parentRef.current) {
      const elementRect = elementRef.current.getBoundingClientRect()
      const parentRect = parentRef.current.getBoundingClientRect()
      draggedRef.current
      && CompatUtils.math.isBelongToElementRectWithIndent(clientX, clientY, elementRect, 20)
      && setOffset(clientX - parentRect.x - parentRect.width)
    }
  }

  const handleMouseUp = () => {
    if (elementRef.current && parentRef.current) {
      const elementRect = elementRef.current.getBoundingClientRect()
      const parentRect = parentRef.current.getBoundingClientRect()
      draggedRef.current && setOffset(0)
      draggedRef.current && endDrag(Math.abs(elementRect.x - parentRect.x))
    }
  }

  React.useEffect(() => (document.addEventListener('mousemove', handleMouseMove) || true) && (() => document.removeEventListener('mousemove', handleMouseMove)), [])
  React.useEffect(() => (document.addEventListener('mouseup', handleMouseUp) || true) && (() => document.removeEventListener('mouseup', handleMouseUp)), [])
  React.useEffect(() => setOffset(0), [parent])

  return (
    <div
      className='resizer'
      style={{
        display: parent ? 'block' : 'none',
        ...(parent ? (() => {
          const parentRect = parent.getBoundingClientRect()

          return {
            left: `${parentRect.left + parentRect.width - 2 + offset}px`,
            top: `${parentRect.top + window.scrollY}px`,
            height: `${parentRect.height}px`
          }
        })() : {})
      }}
      ref={e => {
        elementRef.current = e
        reference(e)
      }}
      draggable={false}
      onMouseDown={() => startDrag()}
    />
  )
}