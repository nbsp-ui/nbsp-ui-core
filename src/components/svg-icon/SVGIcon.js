import React from 'react'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './SVGIcon.scss'

/**
 * @param {SVGIconProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const SVGIcon = props => {
  const { icon } = props

  const className = ComponentHelper.composeClass('nbsp-ui-svg-icon')
  const style = ComponentHelper.composeStyle(props)

  return <div className={className} style={style}>{icon}</div>
}