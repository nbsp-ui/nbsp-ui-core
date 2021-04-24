import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './SVGIcon.scss'

const mappers = {
  'size': ({ size }) => ({
    ...size && {
      width: `${size}px`,
      height: `${size}px`
    }
  })
}

/**
 * @param {SVGIconProps} props
 * @returns {*}
 * @constructor
 */
export const SVGIcon = props => {
  const { icon } = props

  const className = ComponentHelper.composeClass('nbsp-ui-svg-icon', props.className)
  const style = ComponentHelper.composeStyle(props, mappers)

  return (
    <div
      className={className}
      style={style}
      {...ComponentHelper.extractListeners(props)}
    >
      {icon}
    </div>
  )
}

SVGIcon.defaultProps = {
  size: 18
}