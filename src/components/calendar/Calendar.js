import { h } from 'preact'
import { CompatLocalization } from '../../utils/CompatLocalization'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import '../behavior.scss'
import './Calendar.scss'
import { CalendarDatePicker } from './CalendarDatePicker'
import { CalendarHeader } from './CalendarHeader'
import { CalendarYearMonthPicker } from './CalendarYearMonthPicker'

/**
 * @param {CalendarProps} props
 * @returns {*}
 * @constructor
 */
export const Calendar = props => {
  const { className: inClassName, value = new Date } = props

  const [{ viewedDate, selectedDate, yearMonthPickerVisible }, patchState] = ReactHelper.usePatchedState({
    viewedDate: new Date(value.getFullYear(), value.getMonth()),
    selectedDate: new Date(value.getFullYear(), value.getMonth(), value.getDate()),
    yearMonthPickerVisible: false
  })

  const viewDate = viewedDate => patchState({ viewedDate })
  const selectDate = selectedDate => {
    patchState({ selectedDate })
    props.onChange?.(selectedDate)
  }
  const toggleYearMonthPickerVisibility = () => patchState({ yearMonthPickerVisible: !yearMonthPickerVisible })

  const className = ComponentHelper.composeClass('nbsp-ui-calendar', inClassName)
  const style = ComponentHelper.composeStyle(props)

  const currentDate = new Date()

  const year = viewedDate.getFullYear()
  const month = viewedDate.getMonth()

  const prevMonth = CompatLocalization.prev_month(month)
  const nextMonth = CompatLocalization.next_month(month)

  const prevMonthYear = CompatLocalization.prev_month_year(year, month)
  const nextMonthYear = CompatLocalization.next_month_year(year, month)

  const displayMonth = (year, month) => setViewedDate(new Date(year, month))

  const displayPrevMonth = () => displayMonth(prevMonthYear, prevMonth)

  const displayNextMonth = () => displayMonth(nextMonthYear, nextMonth)

  return (
    <div className={className} style={style}>
      <CalendarHeader
        viewedDate={viewedDate}
        onPrevMonthClick={displayPrevMonth}
        onNextMonthClick={displayNextMonth}
        onTitleClick={toggleYearMonthPickerVisibility}
      />
      <CalendarYearMonthPicker
        visible={yearMonthPickerVisible}
        currentDate={currentDate}
        viewedDate={viewedDate}
        selectedDate={selectedDate}
        onMonthClick={month => viewDate(new Date(year, month))}
        onYearClick={year => viewDate(new Date(year, month))}
      />
      <CalendarDatePicker
        currentDate={currentDate}
        viewedDate={viewedDate}
        selectedDate={selectedDate}
        onDateClick={date => {
          selectDate(new Date(year, month, date))
        }}
        onPrevMonthDateClick={date => {
          selectDate(new Date(prevMonthYear, prevMonth, date))
          displayPrevMonth()
        }}
        onNextMonthDateClick={date => {
          selectDate(new Date(nextMonthYear, nextMonth, date))
          displayNextMonth()
        }}
      />
    </div>
  )
}