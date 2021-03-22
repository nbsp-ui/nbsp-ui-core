import * as React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Checkbox.scss'

/**
 * @param {CheckboxProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Checkbox = props => {
  const { label, onChange } = props

  const [checked, setChecked] = React.useState(props.value || false)

  const className = CompatClassComposer.append(
    'nbsp-ui-checkbox',
    { use: 'nbsp-ui-checkbox-checked', if: checked }
  )
  const style = CompatStyleComposer.compose(props)

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