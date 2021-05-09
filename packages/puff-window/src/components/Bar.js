import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './Bar.sass'
import { Control } from './Control'
import { Header } from './Header'
import { Menu } from './Menu'
import { Pager } from './Pager'

/**
 * @param props
 * @param {string} props.title
 * @param {string} props.icon
 * @param {Page[]} props.pages
 * @returns {*}
 * @constructor
 */
export const Bar = ({ title, icon, pages }) => {
  const [expanded, setExpanded] = useState(false)
  const [selection, setSelection] = useState(0)

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
          pages={pages}
          selection={selection}
          onSelectionChange={setSelection}
        />
        <Pager
          expanded={expanded}
          pages={pages}
          selection={selection}
        />
        <Control
          expanded={expanded}
        />
        <div className="⬅"/>
      </div>
    </div>
  )
}