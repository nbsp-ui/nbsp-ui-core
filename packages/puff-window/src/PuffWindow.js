import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './PuffWindow.sass'
import { PuffWindowBar } from './PuffWindowBar'

/**
 * @param {PuffWindowProps} props
 * @returns {*}
 * @constructor
 */
export const PuffWindow = props => {
  const className = ComponentHelper.composeClass(
    'ui-puff-window'
  )

  const style = {
    ...(props.width && { width: `${props.width}px` }),
    ...(props.height && { height: `${props.height}px` })
  }

  return (
    <div
      className={className}
      style={style}
    >
      <PuffWindowBar
        title={props.title}
        icon={props.icon}
      />
      <div className="content">

      </div>
    </div>
  )
}

PuffWindow.defaultProps = {
  width: 800,
  height: 600
}