import React from 'react'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
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
 * @return {JSX.Element}
 * @constructor
 */
export const Button = props => {
  const { type = CompatButtonType.Ghost, disabled, label } = props

  const className = ComponentHelper.composeClass(
    'nbsp-ui-button',
    { use: 'nbsp-ui-button-disabled', if: disabled },
    { use: 'nbsp-ui-button-ghost', if: type === CompatButtonType.Ghost },
    { use: 'nbsp-ui-button-primary', if: type === CompatButtonType.Primary },
    { use: 'nbsp-ui-button-outline', if: type === CompatButtonType.Outline },
    { use: 'nbsp-ui-button-icon', if: type === CompatButtonType.Icon },
    props.className
  )
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style}>
      {label && <p>{label}</p>}
      {props.icon}
    </div>
  )
}

Button.defaultProps = {
  fit: true
}