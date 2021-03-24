import React from 'react'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Tag.scss'

/**
 * @param {TagProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Tag = props => {
  const { value, onClick, onClose } = props

  const className = ComponentHelper.composeClass(
    'nbsp-ui-tag',
    { use: 'nbsp-ui-tag-clickable', if: onClick },
    props.className
  )
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style} onClick={() => onClick && onClick()}>
      <span>{value}</span>
      {onClose && <div className='spacer'/>}
      {onClose && <div className='close' onClick={() => onClose()}><i className="fas fa-times"/></div>}
    </div>
  )
}