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
 * @param props
 * @param {Date} props.value
 * @param {number} props.width
 * @param {number} props.height
 * @param {boolean} props.fit
 * @param {string} props.label
 * @param {number} props.labelWidth
 * @param {string} props.placeholder
 * @return {JSX.Element}
 * @constructor
 */
export const DatePicker = props => {
  const { value, fit, label, labelWidth, placeholder } = props

  const [picker_displayed, display_picker] = React.useState(false)
  const [selected_date, select_date] = React.useState(new Date())

  const className = CompatClassComposer.append('nbsp-ui-date-picker')
  const style = CompatStyleComposer.compose(props)

  return (
    <div className={className} style={style}>
      <Input
        id={ids.input}
        value={format(selected_date, 'dd.MM.yyyy')}
        label={label}
        labelWidth={labelWidth}
        fit={fit}
        placeholder={placeholder}
        readOnly
        after={<FAIcon icon='far fa-calendar'/>}
        afterOnClick={() => display_picker(!picker_displayed)}
      />
      <Popup to={CompatUtils.$$(ids.input)} show={picker_displayed} onHide={() => display_picker(undefined)}>
        <Calendar
          value={value}
          width={300}
          onChange={date => {
            select_date(date)
            display_picker(false)
          }}
        />
      </Popup>
    </div>
  )
}