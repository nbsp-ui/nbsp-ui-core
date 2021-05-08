import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { HBox } from '../box-h/HBox'

/**
 * @param props
 * @param {Ref<HTMLElement>} props.reference
 * @param {TableColumn} props.column
 * @param {{}[]} props.items
 * @param {boolean} props.prevented
 * @param {function(): void} props.onClick
 * @param {function(): void} props.onEnter
 * @param {function(): void} props.onLeave
 * @param {function(): void} props.onDragStart
 * @returns {*}
 * @constructor
 */
export const TableColumnHeader = ({
                                    reference,
                                    column,
                                    items,
                                    prevented,
                                    onClick,
                                    onEnter,
                                    onLeave,
                                    onDragStart,
                                    onEnterResizeArea
                                  }) => {
  const [hovered, setHovered] = useState(false)
  const mouseDownX = useRef(0)
  const mouseDownY = useRef(0)

  /**
   * @type {RefObject<HTMLElement>}
   */
  const elementRef = useRef()

  return (
    <HBox
      className={
        ComponentHelper.composeClass(
          column.sort && 'clickable',
          hovered && 'hovered',
          column._sortedByAsc && 'sorted-by-asc',
          column._sortedByDesc && 'sorted-by-desc'
        )
      }
      reference={element => {
        elementRef.current = element
        reference(element)
      }}
      vAlign={CompatAlign.Center}
      width={column.width}
      onClick={() => !prevented && onClick()}
      onMouseEnter={() => {
        setHovered(true)
        onEnter()
      }}
      onMouseLeave={() => {
        mouseDownX.current = 0
        mouseDownY.current = 0
        setHovered(false)
        onLeave()
      }}
      onMouseDown={event => {
        mouseDownX.current = event.clientX
        mouseDownY.current = event.clientY
      }}
      onMouseUp={() => {
        mouseDownX.current = 0
        mouseDownY.current = 0
      }}
      onMouseMove={event => {
        mouseDownX.current
        && mouseDownY.current
        && CompatUtils.math.pointsDistance(event.clientX, event.clientY, mouseDownX.current, mouseDownY.current) >= 10
        && onDragStart
        && onDragStart()
      }}
    >
      {column.header(items)}
    </HBox>
  )
}
