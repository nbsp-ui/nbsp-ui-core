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
    props.disabled && 'nbsp-ui-input-disabled',
    !valid && 'nbsp-ui-input-validation-error',
    props.before && 'nbsp-ui-input-before',
    props.after && 'nbsp-ui-input-after',
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
      {label && <p className="label" style={{ width: props.labelWidth || 'auto' }}>{label}</p>}

      {
        before
        &&
        <div
          className={
            ComponentHelper.composeClass(
              'before',
              props.beforeOnClick && 'before-clickable'
            )
          }
          onClick={props.beforeOnClick}>{before}
        </div>
      }

      <input
        type="text"
        placeholder={props.placeholder}
        readOnly={readOnly}
        value={value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onInputClick}
      />

      {
        after
        &&
        <div
          className={
            ComponentHelper.composeClass(
              'after',
              props.afterOnClick && 'after-clickable'
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