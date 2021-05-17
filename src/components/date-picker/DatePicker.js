import { format } from 'date-fns'
import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Calendar } from '../calendar/Calendar'
import { FAIcon } from '../icon-fa/FAIcon'
import { Input } from '../input/Input'
import { Popup } from '../popup/Popup'
import './DatePicker.scss'
import { Actions } from './Model'

/**
 * @param {DatePickerProps} props
 * @returns {*}
 * @constructor
 */
export const DatePicker = props => {
  const { value = new Date() } = props

  const [state, dispatch] = ReactHelper.useDispatchedState({
    selectedDate: value,
    opened: false
  })

  const element = useRef()

  const className = ComponentHelper.composeClass('nbsp-ui-date-picker', props.className)

  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style}>
      <Input
        reference={element}
        value={format(state.selectedDate, 'dd.MM.yyyy')}
        label={props.label}
        labelWidth={props.labelWidth}
        fit={props.fit}
        placeholder={props.placeholder}
        readOnly
        disabled={props.disabled}
        after={<FAIcon icon="far fa-calendar"/>}
        afterOnClick={() => dispatch(Actions.Toggle)}
      />
      <Popup
        to={element}
        showed={state.opened}
        onBlur={() => dispatch(Actions.Close)}
      >
        <Calendar
          value={value}
          width={300}
          padding={16}
          onChange={date => {
            dispatch(Actions.Select, { date })
            props.onChange && props.onChange(date)
          }}
        />
      </Popup>
    </div>
  )
}