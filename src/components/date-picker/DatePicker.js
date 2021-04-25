import { format } from 'date-fns'
import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { Calendar } from '../calendar/Calendar'
import { FAIcon } from '../icon-fa/FAIcon'
import { Input } from '../input/Input'
import { Popup } from '../popup/Popup'
import './DatePicker.scss'

const ids = {
  input: CompatUtils.uid()
}

/**
 * @param {DatePickerProps} props
 * @returns {*}
 * @constructor
 */
export const DatePicker = props => {
  const { value, fit, disabled, label, labelWidth, placeholder } = props

  const [pickerDisplayed, setPickerDisplayed] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const element = useRef()

  const className = ComponentHelper.composeClass('nbsp-ui-date-picker')
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style}>
      <Input
        reference={element}
        value={format(selectedDate, 'dd.MM.yyyy')}
        label={label}
        labelWidth={labelWidth}
        fit={fit}
        placeholder={placeholder}
        readOnly
        disabled={disabled}
        after={<FAIcon icon="far fa-calendar"/>}
        afterOnClick={() => setPickerDisplayed(!pickerDisplayed)}
      />
      <Popup
        to={element}
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