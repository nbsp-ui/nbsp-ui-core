import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './Bar.sass'
import { Control } from './Control'
import { Header } from './Header'
import { Menu } from './Menu'
import { MenuSelection } from './MenuSelection'
import { Pager } from './Pager'

/**
 * @param props
 * @param {string} props.title
 * @param {string} props.icon
 * @param {PuffWindowNotification[]} props.notifications
 * @returns {*}
 * @constructor
 */
export const Bar = ({ title, icon, notifications }) => {
  const [expanded, setExpanded] = useState(false)
  const [selection, setSelection] = useState(MenuSelection.Information)

  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-bar',
    { use: 'nbsp-ui-pw-bar-expanded', if: expanded }
  )

  return (
    <div className={className}>
      <div className="☂">
        <Header
          title={title}
          icon={icon}
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        />
        <Menu
          expanded={expanded}
          selection={selection}
          onSelectionChange={setSelection}
        />
        <Pager
          expanded={expanded}
          selection={selection}
          notifications={notifications}
        />
        <Control
          expanded={expanded}
        />
        <div className="⬅"/>
      </div>
    </div>
  )
}