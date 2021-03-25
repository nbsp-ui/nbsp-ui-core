import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import { CompatUtils } from "../../utils/CompatUtils"
import './Select.scss'
import {FAIcon, Input, List, Popup} from "../.."

const ids = {
  input: CompatUtils.uid()
}

/**
 * @param {SelectProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Select = props => {
  const {
    id,
    label,
    labelWidth,
    fit,
    placeholder,
    onSelectChange
  } = props

  const [pickerDisplayed, setPickerDisplayed] = React.useState(false)

  const className = ComponentHelper.composeClass('nbsp-ui-select', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div id={id} className={className} style={style}>
      <Input
        id={ids.input}
        label={label}
        labelWidth={labelWidth}
        fit={fit}
        placeholder={placeholder}
        after={<FAIcon margin={{ top: 3 }} icon='fas fa-chevron-down'/>}
        afterOnClick={() => setPickerDisplayed(!pickerDisplayed)}
      />
      <Popup
        to={CompatUtils.$$(ids.input)}
        showRequested={pickerDisplayed}
        onBlur={() => setPickerDisplayed(false)}
      >
        {props.listHeader && <div className='header' onClick={props.listHeaderOnClick}>{ props.listHeader() }</div>}
        <List
          width={300}
          height={300}
          onChange={(updatedItem, oldItem) => onSelectChange(updatedItem, oldItem)}
          multiselect={props.multiselect}
          data={props.data}
          row={props.listRow}
        />
        {props.listFooter && <div className='footer' onClick={props.listFooterOnClick}>{ props.listFooter() }</div>}
      </Popup>
    </div>
  )
}