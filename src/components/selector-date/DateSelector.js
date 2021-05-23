import { format } from 'date-fns'
import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Calendar } from '../calendar/Calendar'
import { Selector } from '../selector/Selector'
import { Actions } from './Actions'
import './DateSelector.sass'

/**
 * @param {DateSelectorProps} props
 * @returns {*}
 * @constructor
 */
export const DateSelector = props => {
  const { value = new Date() } = props

  const [state, dispatch] = ReactHelper.useDispatchedState({
    selectedDate: value
  })

  const className = ComponentHelper.composeClass(
    'nbsp-ui-date-selector',
    props.className
  )

  return (
    <Selector
      className={className}
      padding={props.padding}
      margin={props.margin}
      label={props.label}
      labelWidth={props.labelWidth}
      value={format(state.selectedDate, 'dd.MM.yyyy')}
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
    </Selector>
  )
}