import React from 'react'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { Box } from '../box/Box'
import './List.scss'

/**
 * @param {ListProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const List = props => {
  const { multiselect, onChange } = props

  const [items, setItems] = React.useState([...props.data].map(item => ({
    ...item,
    _id: CompatUtils.uid(),
    _selected: item._selected || false,
    _hidden: item._hidden || false
  })))

  const selectItem = (item) => {
    const oldItem = { ...item }, updatedItem = { ...item }, condition = !item._selected

    updatedItem._selected = condition

    multiselect || unSelectAll()
    items.find(i => i._id === item._id)._selected = condition
    setItems([...items])
    onChange && onChange(oldItem, updatedItem, getSelectedItems())
  }

  /**
   * @return {ListItem[] | {}[]}
   */
  const getSelectedItems = () => items.filter(item => item._selected)

  const selectAll = () => {
    items.map(item => item._selected = true)
    setItems([...items])
    onChange && onChange(null, null, getSelectedItems())
  }

  const unSelectAll = () => {
    items.map(item => item._selected = false)
    setItems([...items])
    onChange && onChange(null, null, getSelectedItems())
  }

  const isAllSelected = () => items.filter(item => !item._selected).length === 0

  const hideItem = (item) =>  {
    items.find(i => i._id === item._id)._hidden = true
    setItems([...items])
  }

  const showItem = (item) => {
    items.find(i => i._id === item._id)._hidden = false
    setItems([...items])
  }

  const className = ComponentHelper.composeClass('nbsp-ui-list', props.className)
  const style = ComponentHelper.composeStyle(props)

  React.useEffect(() => {
    !props.searchValue
      ? items.forEach((item) => showItem(item))
      : items.forEach((item) => item.value.includes(props.searchValue) ? showItem(item) : hideItem(item))
  }, [props.searchValue])

  return (
    <div className={className} style={style}>
      {
        items.map(item =>
          item._hidden ||
          <Box
            className={ComponentHelper.composeClass('item', { use: 'item-selected', if: item._selected })}
            key={item._id}
            onClick={() => selectItem(item)}
          >
            { props.row(item) }
          </Box>
        )
      }
    </div>
  )
}