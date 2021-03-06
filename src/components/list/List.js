import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import './List.scss'

/**
 * @param {ListProps} props
 * @returns {*}
 * @constructor
 */
export const List = props => {
  const { multiselect, onItemsSelect } = props

  const refresh = ReactHelper.useRefresh()

  /**x
   * @type {Ref<ListItem[]>}
   */
  const items = useRef([])

  ReactHelper.useDifference(() => items.current = props.data, props.data)

  /**
   * @param {ListItem} item
   */
  const selectItem = item => {
    !multiselect && items.current.forEach(item => item._selected = false)
    item._selected = !item._selected
    onItemsSelect && onItemsSelect({ selected: items.current.filter(item => item._selected), all: items.current })
    refresh()
  }

  ReactHelper.useDifference(() => {
    items.current.forEach(item => item._selected = false)
    props.selectedValues && items.current.forEach(item => props.selectedValues.includes(item.value) && (item._selected = true))
    onItemsSelect && onItemsSelect({ selected: items.current.filter(item => item._selected), all: items.current })
  }, props.selectedValues)

  const className = ComponentHelper.composeClass('nbsp-ui-list', props.className)

  const style = ComponentHelper.composeStyle(props, props.style)

  return (
    <div className={className} style={style}>
      {
        items.current.map((item, index) =>
          !item._hidden && (
            <div
              key={index}
              className={ComponentHelper.composeClass('item', item._selected && 'item-selected')}
              style={{ borderBottom: props.divided ? '1px solid #EEEEEE' : '' }}
              onClick={() => selectItem(item)}
            >
              {props.row(item)}
            </div>
          )
        )
      }
    </div>
  )
}