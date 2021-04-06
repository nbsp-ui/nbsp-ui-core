import React from 'react'
import { CompatLocalization } from '../../utils/CompatLocalization'
import { ComponentHelper } from '../../utils/ComponentHelper'
import '../behavior.scss'
import './Calendar.scss'
import { CalendarHeader } from './CalendarHeader'
import { CalendarDatePicker } from './CalendarDatePicker'
import { CalendarYearMonthPicker } from './CalendarYearMonthPicker'

/**
 * @param {CalendarProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Calendar = props => {
  const { value = new Date } = props

  const [viewedDate, setViewedDate] = React.useState(new Date(value.getFullYear(), value.getMonth()))
  const [selectedDate, setSelectedDate] = React.useState(new Date(value.getFullYear(), value.getMonth(), value.getDate()))
  const [yearMonthPickerDisplayed, setYearMonthPickerDisplayed] = React.useState(false)

  const className = ComponentHelper.composeClass('nbsp-ui-calendar')
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

  React.useEffect(() => props.onChange && props.onChange(selectedDate), [selectedDate])

  return (
    <div className={className} style={style}>
      <CalendarHeader
        viewedDate={viewedDate}
        onPrevMonthClick={displayPrevMonth}
        onNextMonthClick={displayNextMonth}
        onTitleClick={() => setYearMonthPickerDisplayed(!yearMonthPickerDisplayed)}
      />
      <CalendarYearMonthPicker
        displayed={yearMonthPickerDisplayed}
        currentDate={currentDate}
        viewedDate={viewedDate}
        selectedDate={selectedDate}
        onMonthClick={month => setViewedDate(new Date(year, month))}
        onYearClick={year => setViewedDate(new Date(year, month))}
      />
      <CalendarDatePicker
        currentDate={currentDate}
        viewedDate={viewedDate}
        selectedDate={selectedDate}
        onDateClick={date => {
          setSelectedDate(new Date(year, month, date))
        }}
        onPrevMonthDateClick={date => {
          setSelectedDate(new Date(prevMonthYear, prevMonth, date))
          displayPrevMonth()
        }}
        onNextMonthDateClick={date => {
          setSelectedDate(new Date(nextMonthYear, nextMonth, date))
          displayNextMonth()
        }}
      />
    </div>
  )
}