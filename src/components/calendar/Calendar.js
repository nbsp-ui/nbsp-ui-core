import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import '../behavior.sass'
import { Actions } from './Actions'
import './Calendar.sass'
import { DatePicker } from './components/DatePicker'
import { Header } from './components/Header'
import { YearMonthPicker } from './components/YearMonthPicker'

/**
 * @param {CalendarProps} props
 * @returns {*}
 * @constructor
 */
export const Calendar = props => {
  const { value = new Date } = props

  const [state, dispatch] = ReactHelper.useDispatchedState({
    viewedDate: new Date(value.getFullYear(), value.getMonth()),
    selectedDate: new Date(value.getFullYear(), value.getMonth(), value.getDate()),
    extended: false
  })

  const className = ComponentHelper.composeClass('nbsp-ui-calendar', props.className)

  const style = ComponentHelper.composeStyle(props)

  useEffect(() => props.onChange?.(state.selectedDate), [state.selectedDate])

  return (
    <div className={className} style={style}>
      <Header
        viewedDate={state.viewedDate}
        onPrevMonthClick={() => dispatch(Actions.ViewPrevMonth)}
        onNextMonthClick={() => dispatch(Actions.ViewNextMonth)}
        onTitleClick={() => dispatch(Actions.ToggleExtendedSelection)}
      />
      <YearMonthPicker
        visible={state.extended}
        viewedDate={state.viewedDate}
        onMonthClick={month => dispatch(Actions.ViewDate, { date: new Date(state.viewedDate.getFullYear(), month) })}
        onYearClick={year => dispatch(Actions.ViewDate, { date: new Date(year, state.viewedDate.getMonth()) })}
      />
      <DatePicker
        viewedDate={state.viewedDate}
        selectedDate={state.selectedDate}
        onDateClick={date => dispatch(Actions.SelectDate, { date })}
        onPrevMonthDateClick={date => dispatch(Actions.SelectPrevMonthDate, { date })}
        onNextMonthDateClick={date => dispatch(Actions.SelectNextMonthDate, { date })}
      />
    </div>
  )
}