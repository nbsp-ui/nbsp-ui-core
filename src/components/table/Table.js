import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { CompatUtils } from '../../utils/CompatUtils'
import { Box } from '../box/Box'
import './Table.scss'

/**
 * @param {TableProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Table = props => {
  const { headerHeight, footerHeight } = props

  const [columns, setColumns] = React.useState([...props.columns.map(column => ({
    ...column,
    _id: CompatUtils.uid()
  }))])
  const [items, setItems] = React.useState([...props.data])

  const style = CompatStyleComposer.compose(props)

  const sort = () => {
    const column = columns.find(column => column._sortedByAsc || column._sortedByDesc)
    column && (items.sort((a, b) => column._sortedByAsc ? column.sort(a, b) : -column.sort(a, b)) || true) && setItems([...items])
  }

  return (
    <div className='nbsp-ui-table' style={style}>
      <Box className='header' height={headerHeight}>
        {
          columns.map((column, index) =>
            <Box
              className={CompatClassComposer.append(
                { use: 'clickable sorted', if: column.sort },
                { use: 'sorted-by-asc', if: column._sortedByAsc },
                { use: 'sorted-by-desc', if: column._sortedByDesc }
              )}
              key={index}
              vAlign={CompatAlign.Center}
              width={column.width}
              onClick={() => {
                if (column.sort) {
                  columns.filter(each => each._id !== column._id).forEach(another => another._sortedByAsc = another._sortedByDesc = false)

                  match(true, {
                    [column._sortedByAsc]: () => column._sortedByAsc = !(column._sortedByDesc = true),
                    [column._sortedByDesc]: () => column._sortedByDesc = !(column._sortedByAsc = true),
                    _: () => column._sortedByAsc = true
                  })()

                  setColumns([...columns])

                  sort()
                }
              }}
            >{column.header(items)}</Box>
          )
        }
      </Box>
      <Box className='rows' vertical>
        {
          items.map((item, index) =>
            <Box key={index}>
              {
                columns.map(({ cell, width }, index) =>
                  <Box
                    key={index}
                    vAlign={CompatAlign.Center}
                    width={width}
                  >
                    {cell(item)}
                  </Box>
                )
              }
            </Box>
          )
        }
      </Box>
      {
        columns.find(column => column.footer)
        &&
        <Box className='footer' height={footerHeight}>
          {
            columns.map((column, index) =>
              <Box
                key={index}
                vAlign={CompatAlign.Center}
                width={column.width}
              >
                {column.footer && column.footer(items)}
              </Box>
            )
          }
        </Box>
      }
    </div>
  )
}