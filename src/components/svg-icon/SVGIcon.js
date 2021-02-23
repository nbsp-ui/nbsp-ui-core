import React from 'react'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './SVGIcon.scss'

/**
 * @param {SVGIconProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const SVGIcon = props => {
  const { icon } = props

  const style = CompatStyleComposer.compose(props)

  return (
    <div className="nbsp-ui-svg-icon" style={style}>
      {icon}
    </div>
  )
}