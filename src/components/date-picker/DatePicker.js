import { format } from 'date-fns'
import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { CompatUtils } from '../../utils/CompatUtils'
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

  const className = CompatClassComposer.append('nbsp-ui-date-picker')
  const style = CompatStyleComposer.compose(props)

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
        showRequested={pickerDisplayed}
        onLeave={() => setPickerDisplayed(false)}
      >
        <Calendar
          value={value}
          width={300}
          onChange={date => {
            setSelectedDate(date)
            setPickerDisplayed(false)
          }}
        />
      </Popup>
    </div>
  )
}