import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Label.scss'

/**
 * @param props
 * @param {string} props.className
 * @param {string} props.value
 * @param {string} props.color
 * @param {CompatIndent} props.padding
 * @param {CompatIndent} props.margin
 * @return {JSX.Element}
 * @constructor
 */
export const Label = props => {
  const { value } = props

  const className = CompatClassComposer.append('nbsp-ui-label', props.className)
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className}>
      <p style={style}>
        {value}
      </p>
    </div>
  )
}