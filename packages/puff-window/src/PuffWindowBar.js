import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './PuffWindowBar.sass'
import { PuffWindowControl } from './PuffWindowControl'
import { PuffWindowHeader } from './PuffWindowHeader'
import { PuffWindowMenu } from './PuffWindowMenu'

/**
 * @param props
 * @param {string} props.title
 * @param {string} props.icon
 * @returns {*}
 * @constructor
 */
export const PuffWindowBar = ({ title, icon }) => {
  const [expanded, setExpanded] = useState(false)

  const className = ComponentHelper.composeClass(
    'ui-puff-window-bar',
    { use: 'ui-puff-window-bar-expanded', if: expanded }
  )

  return (
    <div className={className}>
      <div className="☂">
        <PuffWindowHeader
          title={title}
          icon={icon}
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        />
        <PuffWindowMenu
          expanded={expanded}
        />
        <div className="➡"/>
        <PuffWindowControl
          expanded={expanded}
        />
        <div className="⬅"/>
      </div>
    </div>
  )
}