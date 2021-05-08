import { h } from 'preact'
import { useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Switch.scss'

/**
 * @param {SwitchProps} props
 * @returns {*}
 * @constructor
 */
export const Switch = props => {
  const [checked, setChecked] = useState(props.value || false)

  const className = ComponentHelper.composeClass(
    'nbsp-ui-switch',
    checked && 'nbsp-ui-switch-checked'
  )

  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      className={className}
      style={style}
      onClick={() => {
        props.onChange && props.onChange(!checked)
        setChecked(!checked)
      }}
    >
      {props.label && <div className='label'>{props.label}</div>}
      {props.label && <div className='spacer'/>}
      <div className='control'>
        <div className='offset'/>
        <div className='thumb'/>
      </div>
    </div>
  )
}