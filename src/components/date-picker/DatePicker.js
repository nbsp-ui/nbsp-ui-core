import { format } from 'date-fns'
import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
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
  const { value = new Date(), fit, disabled, label, labelWidth, placeholder, onChange } = props

  const [{ selectedDate, selecting }, patchState] = ReactHelper.usePatchedState({
    selectedDate: value,
    selecting: false,
  })

  const element = useRef()

  const showSelection = () => patchState({ selecting: true })
  const hideSelection = () => patchState({ selecting: false })
  const toggleSelection = () => selecting ? hideSelection() : showSelection()
  const selectDate = date => {
    patchState({
      selectedDate: date,
      selecting: false
    })
    onChange && onChange(date)
  }

  const className = ComponentHelper.composeClass('nbsp-ui-date-picker', props.className)
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
        afterOnClick={toggleSelection}
      />
      <Popup
        to={element}
        showed={selecting}
        onBlur={hideSelection}
      >
        <Calendar
          value={value}
          width={300}
          padding={16}
          onChange={selectDate}
        />
      </Popup>
    </div>
  )
}