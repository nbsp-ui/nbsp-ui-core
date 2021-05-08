import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Button.scss'

export const CompatButtonType = {
  Primary: 0,
  Outline: 1,
  Ghost: 2,
  Icon: 3
}

/**
 * @param {ButtonProps} props
 * @returns {*}
 * @constructor
 */
export const Button = props => {
  const { type = CompatButtonType.Ghost, disabled, label } = props

  const className = ComponentHelper.composeClass(
    'nbsp-ui-button',
    disabled && 'nbsp-ui-button-disabled',
    type === CompatButtonType.Ghost && 'nbsp-ui-button-ghost',
    type === CompatButtonType.Primary && 'nbsp-ui-button-primary',
    type === CompatButtonType.Outline && 'nbsp-ui-button-outline',
    type === CompatButtonType.Icon && 'nbsp-ui-button-icon',
    props.className
  )

  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style} onClick={props.onClick}>
      {label && <p>{label}</p>}
      {props.icon}
    </div>
  )
}

Button.defaultProps = {
  fit: true
}