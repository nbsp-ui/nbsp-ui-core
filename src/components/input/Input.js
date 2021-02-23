import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Input.scss'

/**
 * @param {InputProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Input = props => {
  const { id, value, label, readOnly, before, after } = props

  const className = CompatClassComposer.append(
    'nbsp-ui-input',
    { use: 'nbsp-ui-input-disabled', if: props.disabled },
    { use: 'nbsp-ui-input-before', if: props.before },
    { use: 'nbsp-ui-input-after', if: props.after }
  )
  const style = CompatStyleComposer.compose(props)

  return (
    <div id={id} className={className} style={style}>
      {label && <p className='label' style={{ width: props.labelWidth || 'auto' }}>{label}</p>}

      {before && <div className={CompatClassComposer.append(
        'before',
        { use: 'before-clickable', if: props.beforeOnClick }
      )} onClick={props.beforeOnClick}>{before}</div>}

      <input type='text' placeholder={props.placeholder} readOnly={readOnly} value={value}/>

      {after && <div className={CompatClassComposer.append(
        'after',
        { use: 'after-clickable', if: props.afterOnClick }
      )} onClick={props.afterOnClick}>{after}</div>}
    </div>
  )
}

Input.defaultProps = {
  fit: true
}