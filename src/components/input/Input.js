import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Input.scss'

/**
 * @param {InputProps} props
 * @returns {*}
 * @constructor
 */
export const Input = props => {
  const { id, reference, value, label, readOnly, before, after } = props

  const [valid, setValid] = useState(true)
  useEffect(() => props.rule && setValid(props.rule(value)), [value])

  const className = ComponentHelper.composeClass(
    'nbsp-ui-input',
    { use: 'nbsp-ui-input-disabled', if: props.disabled },
    { use: 'nbsp-ui-input-validation-error', if: !valid },
    { use: 'nbsp-ui-input-before', if: props.before },
    { use: 'nbsp-ui-input-after', if: props.after },
    props.className
  )
  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      id={id}
      className={className}
      style={style}
      ref={reference}
    >
      {label && <p className='label' style={{ width: props.labelWidth || 'auto' }}>{label}</p>}

      {
        before
        &&
        <div
          className={
            ComponentHelper.composeClass(
              'before',
              { use: 'before-clickable', if: props.beforeOnClick }
            )
          }
          onClick={props.beforeOnClick}>{before}
        </div>
      }

      <input
        type='text'
        placeholder={props.placeholder}
        readOnly={readOnly}
        value={value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />

      {
        after
        &&
        <div
          className={
            ComponentHelper.composeClass(
              'after',
              { use: 'after-clickable', if: props.afterOnClick }
            )
          }
          onClick={props.afterOnClick}>{after}</div>
      }
    </div>
  )
}

Input.defaultProps = {
  fit: false
}