import React from 'react'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Box.scss'

/**
 * @param {BoxProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Box = props => {
  const { children, onClick } = props

  const className = ComponentHelper.composeClass('nbsp-ui-box', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  )
}

Box.defaultProps = {
  fit: false
}