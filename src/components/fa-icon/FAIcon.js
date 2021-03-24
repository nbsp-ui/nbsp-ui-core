import React from 'react'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './FAIcon.scss'

/**
 * @param {FAIconProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const FAIcon = props => {
  const { icon, onClick } = props

  const className = ComponentHelper.composeClass('nbsp-ui-icon', 'nbsp-ui-fa-icon', props.className)
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style} onClick={onClick}>
      <i className={icon}/>
    </div>
  )
}