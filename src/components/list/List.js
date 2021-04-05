import React from 'react'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Box } from '../box/Box'
import './List.scss'

/**
 * @param {ListProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const List = props => {
  const { multiselect } = props

  const refresh = ReactHelper.useRefresh()

  /**
   * @type {React.MutableRefObject<ListItem[]>}
   */
  const items = React.useRef(props.data)

  /**
   * @param {ListItem | {}} item
   */
  const selectItem = item => {
    !multiselect && items.current.forEach(item => item._selected = false)
    item._selected = !item._selected
    props.onSelectItems && props.onSelectItems(items.current.filter(item => item._selected), items.current)
    refresh()
  }

  // TODO: Excessive refresh
  React.useEffect(() => {
    items.current = props.data
    refresh()
  }, [props.data])

  const className = ComponentHelper.composeClass('nbsp-ui-list', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style}>
      {
        items.current.map((item, index) =>
          !item._hidden
          &&
          <Box
            key={index}
            className={ComponentHelper.composeClass({ use: 'selected', if: item._selected })}
            style={{ borderBottom: props.divider ? '1px solid #EEEEEE' : '' }}
            onClick={() => selectItem(item)}
          >
            {props.row(item)}
          </Box>
        )
      }
    </div>
  )
}