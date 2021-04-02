import { format } from 'date-fns'
import React from 'react'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { Calendar } from '../calendar/Calendar'
import { FAIcon } from '../fa-icon/FAIcon'
import { Input } from '../input/Input'
import { Popup } from '../popup/Popup'
import './DatePicker.scss'

const ids = {
  input: CompatUtils.uid()
}

/**
 * @param {DatePickerProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const DatePicker = props => {
  const { value, fit, label, labelWidth, placeholder } = props

  const [pickerDisplayed, setPickerDisplayed] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const className = ComponentHelper.composeClass('nbsp-ui-date-picker')
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style}>
      <Input
        id={ids.input}
        value={format(selectedDate, 'dd.MM.yyyy')}
        label={label}
        labelWidth={labelWidth}
        fit={fit}
        placeholder={placeholder}
        readOnly
        after={<FAIcon icon='far fa-calendar'/>}
        afterOnClick={() => setPickerDisplayed(!pickerDisplayed)}
      />
      <Popup
        to={CompatUtils.$$(ids.input)}
        showed={pickerDisplayed}
        onBlur={() => setPickerDisplayed(false)}
      >
        <Calendar
          value={value}
          width={300}
          padding={16}
          onChange={date => {
            setSelectedDate(date)
            setPickerDisplayed(false)
          }}
        />
      </Popup>
    </div>
  )
}