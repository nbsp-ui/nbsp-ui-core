import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import DragIcon from '../../icons/drag.svg'
import FunctionIcon from '../../icons/function.svg'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { SVGIcon } from '../icon-svg/SVGIcon'
import './PivotTableSelectorItem.scss'
import { PivotTableShadow } from './PivotTableShadow'

/**
 * @param props
 * @param {string} props.className
 * @param {string} props.label
 * @param {boolean} props.dragged
 * @param {boolean} props.droppable
 * @param {*} props.after
 * @param {*} props.popup
 * @param {Function} props.onDragStart
 * @param {Function} props.onDragEnd
 * @param {Function} props.onDropLeftReady
 * @param {Function} props.onDropRightReady
 * @returns {*}
 * @constructor
 */
export const PivotTableSelectorItem = ({
                                         className,
                                         label,
                                         dragged,
                                         droppable,
                                         after,
                                         popup,
                                         onDragStart,
                                         onDragEnd,
                                         onDropLeftReady,
                                         onDropRightReady
                                       }) => {
  const refresh = ReactHelper.useRefresh()

  /**
   * @type {Ref<HTMLElement>}
   */
  const element = useRef()

  const elementRect = element.current?.getBoundingClientRect()

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
        'nbsp-ui-pivot-table-selector-item',
        { use: 'nbsp-ui-pivot-table-selector-item-dragged', if: dragged },
        className
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
          {label}
        </p>
        {after}
        <div className="overlay"/>
      </div>
      {popup}
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
            <p className="label">{label}</p>
            {after}
          </div>
        </PivotTableShadow>
      )}
    </div>
  )
}