import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Box.scss'

/**
 * @param {BoxProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Box = props => {
  const { children, onClick } = props

  const className = CompatClassComposer.append('nbsp-ui-box', props.className)
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  )
}

Box.defaultProps = {
  fit: false
}