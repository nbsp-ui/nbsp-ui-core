import { h } from 'preact'
import { ReactHelper } from '../../utils/ReactHelper'
import './PivotTableShadow.scss'

/**
 * @param props
 * @param {*} props.children
 * @param {number} props.x
 * @param {number} props.y
 * @param {number} props.width
 * @param {number} props.height
 * @param {Function} props.onUp
 * @returns {*}
 * @constructor
 */
export const PivotTableShadow = ({ children, x, y, width, height, onUp }) => {
  ReactHelper.registerGlobalMouseEventListener('mouseup', () => onUp())

  return (
    <div
      className="nbsp-ui-pivot-table-shadow"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      {children}
    </div>
  )
}