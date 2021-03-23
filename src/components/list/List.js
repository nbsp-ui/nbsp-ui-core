import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './List.scss'
import { Box } from "../box/Box";

/**
 * @param {ListProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const List = props => {
  const { onChange } = props

  const [items, setItems] = React.useState([...props.data])

  const selectItem = (item) => {
    const updatedItem = {...item}, condition = !item.selected

    updatedItem.selected = condition
    onChange && onChange(item, updatedItem)

    items.find(i => i.id === item.id).selected = condition
    setItems([...items])
  }

  const className = CompatClassComposer.append('nbsp-ui-list', props.className)
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style}>
      {
        items.map(item =>
          <Box
            className={CompatClassComposer.append(
              'item',
              { use: 'item-selected', if: item.selected }
            )}
            key={item.id}
            onClick={() => selectItem(item)}
          >
            <span>{item.value}</span>
          </Box>
        )
      }
    </div>
  )
}