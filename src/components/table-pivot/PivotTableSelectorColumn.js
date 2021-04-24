import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import FunctionIcon from '../../icons/function.svg'
import { SVGIcon } from '../icon-svg/SVGIcon'
import { PivotTableMethodSelector } from './PivotTableMethodSelector'
import './PivotTableSelectorColumn.scss'
import { PivotTableSelectorItem } from './PivotTableSelectorItem'

/**
 * @param props
 * @param {PivotTableColumnField} props.column
 * @param {boolean} props.dragged
 * @param {boolean} props.droppable
 * @param {Function} props.onColumnChange
 * @param {Function} props.onDragStart
 * @param {Function} props.onDragEnd
 * @param {Function} props.onDropLeftReady
 * @param {Function} props.onDropRightReady
 * @returns {*}
 * @constructor
 */
export const PivotTableSelectorColumn = ({
                                           column,
                                           dragged,
                                           droppable,
                                           onColumnChange,
                                           onDragStart,
                                           onDragEnd,
                                           onDropLeftReady,
                                           onDropRightReady
                                         }) => {
  const [methodsSelecting, setMethodSelecting] = useState(false)

  /**
   * @type {Ref<HTMLElement>}
   */
  const methodElement = useRef()

  return (
    <PivotTableSelectorItem
      className="nbsp-ui-pivot-table-selector-column"
      label={column.label}
      after={
        <div
          className="method"
          ref={methodElement}
          onClick={() => setMethodSelecting(true)}
        >
          <SVGIcon icon={<FunctionIcon/>}/>
        </div>
      }
      popup={
        methodsSelecting && (
          <PivotTableMethodSelector
            parent={methodElement.current}
            methods={column.as}
            onBlur={() => setMethodSelecting(false)}
            onChange={as => onColumnChange({ ...column, as })}
          />
        )
      }
      dragged={dragged}
      droppable={droppable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDropLeftReady={onDropLeftReady}
      onDropRightReady={onDropRightReady}
    />
  )
}