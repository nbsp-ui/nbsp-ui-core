import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import { Box } from "../box/Box"
import { CompatUtils } from "../../utils/CompatUtils"
import './Tabs.scss'

/**
 * @param {TabsProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Tabs = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-tabs', props.className)
  const style = ComponentHelper.composeStyle(props)


  const [tabs, setTabs] = React.useState([...props.tabs].map(tab => ({ _id: CompatUtils.uid(), ...tab })))
  const [selectedTab, setSelectedTab] = React.useState(props.tabs[0])

  const hideItem = (item) => {
    tabs.find(i => i._id === item._id)._hidden = true
    setTabs([...tabs])
  }

  return (
    <div id={id} className={className} style={style}>
      <Box vertical={props.vertical} className={'header'}>
        {
          tabs.map(tab =>
            !tab._hidden
            &&
            <div
               className={ComponentHelper.composeClass('item', { use: 'item-selected', if: selectedTab._id === tab._id })}
               key={tab._id}
               id={tab._id}
               onClick={(e) => {
                 const oldItem = { ...selectedTab }
                 setSelectedTab(tab)
                 props.onChange && props.onChange(tab, oldItem)
               }}
            >
              { tab.icon && <div className={'icon'}> <i className={`${tab.icon}`} /> </div> }
              { tab.header }
              {
                tab.closable
                &&
                <div className={'close'} onClick={() => {
                  props.onClose && props.onClose(tab)
                  hideItem(tab)
                }}> <i className='fas fa-times' /> </div>
              }
            </div>
          )
        }
      </Box>
    </div>
  )
}