import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import './Table.scss'
import { TableContainer } from './TableContainer'
import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'

/**
 * @param {TableProps} props
 * @returns {*}
 * @constructor
 */
export const Table = props => {
  const refresh = ReactHelper.useRefresh()

  const columns = useRef(props.columns.map((column, index) => ({
    ...column,
    _id: CompatUtils.uid(),
    _position: index
  })))

  const items = useRef([])
  const appliedItems = useRef([])

  const filter = items => props.filter ? items.filter(props.filter) : items
  const applyItems = items => appliedItems.current = filter(items)

  const selectItem = item => {
    !props.multiselect && items.current.forEach(item => item._selected = false)
    item._selected = !item._selected
    props.onItemsSelect && props.onItemsSelect({ selected: items.current.filter(item => item._selected), all: items.current})
    refresh()
  }

  useEffect(() => {
    applyItems(items.current)
    refresh()
  }, [props.filter, items.current])

  ReactHelper.useDifference(() => applyItems(items.current = props.data.map(item => ({
    ...item,
    _id: CompatUtils.uid(),
    _selected: item._selected || false
  }))), props.data)

  const className = ComponentHelper.composeClass('nbsp-ui-table', props.className)

  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      className={className}
      style={style}
    >
      <TableHeader
        columns={columns.current}
        items={appliedItems.current}
        headerHeight={props.headerHeight}
        onRefreshRequest={() => {
          refresh()
        }}
        onSortRequest={column => {
          columns.current.filter(each => each._id !== column._id).forEach(another => another._sortedByAsc = another._sortedByDesc = false)

          match(true, {
            [column._sortedByAsc]: () => column._sortedByAsc = !(column._sortedByDesc = true),
            [column._sortedByDesc]: () => column._sortedByDesc = !(column._sortedByAsc = true),
            _: () => column._sortedByAsc = true
          })()

          column && appliedItems.current.sort((a, b) => column._sortedByAsc ? column.sort(a, b) : -column.sort(a, b))

          refresh()
        }}
      />
      <TableContainer
        columns={columns.current}
        items={appliedItems.current}
        style={{ ...(props.height ? { overflowY: 'overlay' } : {}), ...(props.width ? { overflowX: 'overlay' } : {}) }}
        onItemClick={item => {
          selectItem(item)
          props.onItemClick && props.onItemClick(item)
        }}
      />
      {
        columns.current.find(column => column.footer)
        &&
        <TableFooter
          columns={columns.current}
          items={appliedItems.current}
          footerHeight={props.footerHeight}
        />
      }
    </div>
  )
}

Table.defaultProps = {
  fit: false
}