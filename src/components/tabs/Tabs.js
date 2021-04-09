import { h } from 'preact'
import { useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { CompatUtils } from '../../utils/CompatUtils'
import './Tabs.scss'
import { SVGIcon } from '../svg-icon/SVGIcon'
import CrossIcon from '../../icons/cross.svg'

/**
 * @param {TabsProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Tabs = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-tabs', props.className)
  const style = ComponentHelper.composeStyle(props)

  const [tabs, setTabs] = useState(props.tabs.map(tab => ({ _id: CompatUtils.uid(), ...tab })))
  const [selectedTab, setSelectedTab] = useState(props.tabs[0])

  const hideItem = item => {
    tabs.find(each => each._id === item._id)._hidden = true
    setTabs([...tabs])
  }

  return (
    <div id={id} className={className} style={style}>
      {
        tabs.filter(tab => !tab._hidden).map((tab, index) =>
          <div
            className={
              ComponentHelper.composeClass(
                { use: 'selected', if: selectedTab._id === tab._id }
              )
            }
            style={{
              display: tab._hidden ? 'none' : 'flex'
            }}
            key={index}
            onClick={() => {
              setSelectedTab(tab)
              props.onTabSelect && props.onTabSelect(tab)
            }}
          >
            <div className="content">
              {tab.icon}
              {tab.label && <p>{tab.label}</p>}
            </div>
            {
              (props.closable || tab.closable)
              &&
              <div className="after">
                {
                  (props.closable || tab.closable)
                  &&
                  <SVGIcon
                    icon={<CrossIcon/>}
                    size={16}
                    onClick={() => {
                      props.onTabClose && props.onTabClose(tab)
                      hideItem(tab)
                    }}
                  />
                }
              </div>
            }
          </div>
        )
      }
    </div>
  )
}