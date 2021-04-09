import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { Box } from '../box/Box'

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
 * @returns {JSX.Element}
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
    <Box
      className={
        ComponentHelper.composeClass(
          { use: 'clickable', if: column.sort },
          { use: 'hovered', if: hovered },
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
    </Box>
  )
}
