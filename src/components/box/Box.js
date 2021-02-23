import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Box.scss'

/**
 * @param {BoxProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Box = props => {
  const { children } = props

  const className = CompatClassComposer.append('nbsp-ui-box', props.className)
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

Box.defaultProps = {
  fit: false,
  vAlign: CompatAlign.Left
}