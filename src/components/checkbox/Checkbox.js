import { h } from 'preact'
import { useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Checkbox.scss'

/**
 * @param {CheckboxProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Checkbox = props => {
  const { label, onChange } = props

  const [checked, setChecked] = useState(props.value || false)

  const className = ComponentHelper.composeClass(
    'nbsp-ui-checkbox',
    { use: 'nbsp-ui-checkbox-checked', if: checked }
  )
  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      className={className}
      style={style}
      onClick={() => {
        onChange && onChange(!checked)
        setChecked(!checked)
      }}
    >
      {label && <div className='label'>{label}</div>}
      {label && <div className='spacer'/>}
      <div className='control'>
        <div className='shape'>
          <div/>
          <div/>
        </div>
      </div>
    </div>
  )
}