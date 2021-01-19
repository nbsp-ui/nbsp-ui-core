import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Box.scss'

/**
 * @param props
 * @param {React.ReactNode | React.ReactNode[]} props.children
 * @param {string} props.className
 * @param {boolean} props.vertical
 * @param {boolean} props.reverse
 * @param {string} props.width
 * @param {string} props.height
 * @param {boolean} props.fit
 * @param {number} props.vAlign
 * @param {number} props.hAlign
 * @param {CompatIndent | number} props.padding
 * @param {CompatIndent | number} props.margin
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