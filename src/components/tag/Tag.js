import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Tag.scss'

/**
 * @param {TagProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Tag = props => {
  const { value, onClick, onClose } = props

  const className = CompatClassComposer.append(
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