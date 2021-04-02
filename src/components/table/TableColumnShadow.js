import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { ReactHelper } from '../../utils/ReactHelper'
import { Box } from '../box/Box'

/**
 * @param {TableColumn} column
 * @param {{}[]} items
 * @param {function(): void} onDragEnd
 * @returns {JSX.Element}
 * @constructor
 */
export const TableColumnShadow = ({ column, items, onDragEnd }) => {
  const refresh = ReactHelper.useRefresh()

  const x = React.useRef(0)
  const y = React.useRef(0)

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
    <Box
      className='shadow'
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
    </Box>
  )
}