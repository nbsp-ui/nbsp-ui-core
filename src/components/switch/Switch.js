import * as React from 'react'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Switch.scss'

/**
 * @param {SwitchProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Switch = props => {
  const [checked, setChecked] = React.useState(props.value || false)

  const className = ComponentHelper.composeClass(
    'nbsp-ui-switch',
    { use: 'nbsp-ui-switch-checked', if: checked }
  )
  const style = CompatStyleComposer.compose(props)

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