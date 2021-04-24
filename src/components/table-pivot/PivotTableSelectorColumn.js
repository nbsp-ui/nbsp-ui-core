import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import DragIcon from '../../icons/drag.svg'
import FunctionIcon from '../../icons/function.svg'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { SVGIcon } from '../icon-svg/SVGIcon'
import { PivotTableMethodSelector } from './PivotTableMethodSelector'
import './PivotTableSelectorColumn.scss'
import { PivotTableShadow } from './PivotTableShadow'

/**
 * @param props
 * @param {PivotTableColumnField} props.column
 * @param {boolean} props.dragged
 * @param {boolean} props.droppable
 * @param {Function} props.onChange
 * @param {Function} props.onDragStart
 * @param {Function} props.onDragEnd
 * @param {Function} props.onDropLeftReady
 * @param {Function} props.onDropRightReady
 * @return {*}
 * @constructor
 */
export const PivotTableSelectorColumn = ({
                                           column,
                                           dragged,
                                           droppable,
                                           onChange,
                                           onDragStart,
                                           onDragEnd,
                                           onDropLeftReady,
                                           onDropRightReady
                                         }) => {
  const refresh = ReactHelper.useRefresh()

  const [methodsSelecting, setMethodSelecting] = useState(false)

  /**
   * @type {Ref<HTMLElement>}
   */
  const element = useRef()

  const elementRect = element.current?.getBoundingClientRect()

  /**
   * @type {Ref<HTMLElement>}
   */
  const methodElement = useRef()

  const shadowX = useRef(0)
  const shadowY = useRef(0)
  const leftDropped = useRef(false)
  const rightDropped = useRef(false)

  ReactHelper.registerGlobalMouseEventListener('mousemove', event => {
    if (dragged) {
      shadowX.current = event.clientX - 15
      shadowY.current = event.clientY - 15 + window.scrollY
      refresh()
    }

    if (droppable) {
      if (CompatUtils.intersects.pointToRect(
        event.clientX,
        event.clientY,
        elementRect.x,
        elementRect.y,
        Math.min(80, elementRect.width / 2),
        elementRect.height
      )) {
        !leftDropped.current && onDropLeftReady()
        !leftDropped.current && (leftDropped.current = true)
        !leftDropped.current && (rightDropped.current = false)
      } else {
        leftDropped.current = false
      }

      if (CompatUtils.intersects.pointToRect(
        event.clientX,
        event.clientY,
        elementRect.x + elementRect.width - Math.min(80, elementRect.width / 2),
        elementRect.y,
        Math.min(80, elementRect.width / 2),
        elementRect.height
      )) {
        !rightDropped.current && onDropRightReady()
        !rightDropped.current && (rightDropped.current = true)
        !rightDropped.current && (leftDropped.current = false)
      } else {
        rightDropped.current = false
      }
    }
  })

  /**
   * @param {MouseEvent} event
   */
  const startDrag = event => {
    shadowX.current = event.clientX - 15
    shadowY.current = event.clientY - 15 + window.scrollY
    !dragged && onDragStart()
  }

  const endDrag = () => {
    onDragEnd()
  }

  return (
    <div
      className={ComponentHelper.composeClass(
        'nbsp-ui-pivot-table-selector-column',
        { use: 'nbsp-ui-pivot-table-selector-column-dragged', if: dragged }
      )}
      ref={element}
    >
      <div className="content">
        <div
          className="drag"
          onMouseDown={event => startDrag(event)}
        >
          <SVGIcon icon={<DragIcon/>}/>
        </div>
        <p className="label">
          {column.label}
        </p>
        <div
          className="method"
          ref={methodElement}
          onClick={() => setMethodSelecting(true)}
        >
          <SVGIcon icon={<FunctionIcon/>}/>
        </div>
        <div className="overlay"/>
      </div>
      {methodsSelecting && (
        <PivotTableMethodSelector
          parent={methodElement.current}
          methods={column.as}
          onBlur={() => setMethodSelecting(false)}
          onChange={as => onChange({ ...column, as })}
        />
      )}
      {dragged && (
        <PivotTableShadow
          x={shadowX.current}
          y={shadowY.current}
          width={elementRect.width}
          height={elementRect.height}
          onUp={() => endDrag()}
        >
          <div className="content">
            <div className="drag">
              <SVGIcon icon={<DragIcon/>}/>
            </div>
            <p className="label">{column.label}</p>
            <div className="method">
              <SVGIcon icon={<FunctionIcon/>}/>
            </div>
          </div>
        </PivotTableShadow>
      )}
    </div>
  )
}