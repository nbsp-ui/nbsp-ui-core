import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './FAIcon.scss'

/**
 * @param {FAIconProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const FAIcon = props => {
  const { icon, onClick } = props

  const className = CompatClassComposer.append('nbsp-ui-icon', 'nbsp-ui-fa-icon', props.className)
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style} onClick={onClick}>
      <i className={icon}/>
    </div>
  )
}