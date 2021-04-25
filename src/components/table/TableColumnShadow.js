import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { CompatAlign } from '../../utils/CompatAlign'
import { ReactHelper } from '../../utils/ReactHelper'
import { HBox } from '../box-h/HBox'

/**
 * @param {TableColumn} column
 * @param {{}[]} items
 * @param {function(): void} onDragEnd
 * @returns {*}
 * @constructor
 */
export const TableColumnShadow = ({ column, items, onDragEnd }) => {
  const refresh = ReactHelper.useRefresh()

  const x = useRef(0)
  const y = useRef(0)

  ReactHelper.registerGlobalMouseEventListener('mousemove', event => {
    x.current = event.clientX
    y.current = event.clientY
    refresh()
  })

  ReactHelper.registerGlobalMouseEventListener('mouseup', () => {
    column && onDragEnd()
  })

  const rect = column?._headerElement.getBoundingClientRect()

  return (
    <HBox
      className="shadow"
      style={
        {
          display: column ? 'flex' : 'none',
          ...column && {
            left: `${x.current - rect.width / 2}px`,
            top: `${y.current - rect.height / 2 + window.scrollY}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`
          }
        }
      }
      vAlign={CompatAlign.Center}
    >
      {column?.header(items)}
    </HBox>
  )
}