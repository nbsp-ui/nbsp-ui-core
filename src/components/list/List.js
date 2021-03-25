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
    _selected: item._selected || false,
    id: item.id || CompatUtils.uid()
  })))

  const selectItem = (item) => {
    const updatedItem = { ...item }, condition = !item._selected

    updatedItem._selected = condition
    onChange && onChange(item, updatedItem)

    multiselect || items.map(item => item._selected = false)
    items.find(i => i.id === item.id)._selected = condition
    setItems([...items])
  }

  const className = ComponentHelper.composeClass('nbsp-ui-list', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style}>
      {
        items.map(item =>
          <Box
            className={ComponentHelper.composeClass('item', { use: 'item-selected', if: item._selected })}
            key={item.id}
            onClick={() => selectItem(item)}
          >
            { props.row(item) }
          </Box>
        )
      }
    </div>
  )
}