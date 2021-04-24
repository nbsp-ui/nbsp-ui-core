import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Box.scss'

/**
 * @param {BoxProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Box = props => {
  const className = ComponentHelper.composeClass('nbsp-ui-box', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      className={className}
      style={{ ...style, ...props.style }}
      ref={props.reference}
      {...ComponentHelper.extractListeners(props)}
    >
      {props.children}
    </div>
  )
}

Box.defaultProps = {
  fit: false
}