import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './PuffWindow.sass'
import { Bar } from './components/Bar'

/**
 * @param {PuffWindowProps} props
 * @returns {*}
 * @constructor
 */
export const PuffWindow = props => {
  const { title, icon, pages } = props

  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw'
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
      <Bar
        title={title}
        icon={icon}
        pages={pages}
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