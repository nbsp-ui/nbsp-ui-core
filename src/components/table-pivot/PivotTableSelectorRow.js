import { h } from 'preact'
import { PivotTableSelectorItem } from './PivotTableSelectorItem'

/**
 * @param props
 * @param {PivotTableRowField} props.row
 * @param {boolean} props.dragged
 * @param {boolean} props.droppable
 * @param {Function} props.onRowChange
 * @param {Function} props.onDragStart
 * @param {Function} props.onDragEnd
 * @param {Function} props.onDropLeftReady
 * @param {Function} props.onDropRightReady
 * @returns {*}
 * @constructor
 */
export const PivotTableSelectorRow = ({
                                           row,
                                           dragged,
                                           droppable,
                                           onRowChange,
                                           onDragStart,
                                           onDragEnd,
                                           onDropLeftReady,
                                           onDropRightReady
                                         }) => {
  return (
    <PivotTableSelectorItem
      className="nbsp-ui-pivot-table-selector-row"
      label={row.label}
      dragged={dragged}
      droppable={droppable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDropLeftReady={onDropLeftReady}
      onDropRightReady={onDropRightReady}
    />
  )
}