import { h } from 'preact'
import { CompatLocalization } from '../../../utils/CompatLocalization'
import { CompatUtils } from '../../../utils/CompatUtils'
import { ComponentHelper } from '../../../utils/ComponentHelper'
import './DatePicker.sass'

/**
 * @param props
 * @param {Date} currentDate
 * @param {Date} viewedDate
 * @param {Date} selectedDate
 * @param {function(date: number): void} onDateClick
 * @param {function(date: number): void} onPrevMonthDateClick
 * @param {function(date: number): void} onNextMonthDateClick
 * @returns {*}
 * @constructor
 */
export const DatePicker = ({
                                  currentDate,
                                  viewedDate,
                                  selectedDate,
                                  onDateClick,
                                  onPrevMonthDateClick,
                                  onNextMonthDateClick
                                }) => {
  const year = viewedDate.getFullYear()
  const month = viewedDate.getMonth()

  const daysInMonth = CompatLocalization.days_in_month(year, month)

  const lastWeekDayRaw = CompatLocalization.week_day_raw(year, month, daysInMonth)

  const firstWeekDay = CompatLocalization.week_day(year, month, 1)
  const lastWeekDay = CompatLocalization.week_day(year, month, daysInMonth)

  const prevMonth = CompatLocalization.prev_month(month)

  const prevMonthYear = CompatLocalization.prev_month_year(year, month)

  const daysInPrevMonth = CompatLocalization.days_in_month(prevMonthYear, prevMonth)

  return (
    <div className="date-picker">
      {CompatLocalization.week_short_days().map((day, index) => (<p className="day" key={index}>{day}</p>))}
      {
        (firstWeekDay === 0 ? CompatUtils.range(0, 6) : CompatUtils.range(0, firstWeekDay - 1)).map((date, index, dates) => daysInPrevMonth - dates[dates.length - 1 - index]).map(date =>
          <p
            className="date date-out clickable clickable-no-animated"
            onClick={() => onPrevMonthDateClick(date)}
            key={'prev-' + date}
          >{date}</p>
        )
      }
      {
        CompatUtils.range(1, daysInMonth).map(date =>
          <p
            className={ComponentHelper.composeClass(
              'date clickable clickable-no-animated t-background-color-0-2 t-color-0-2',
              {
                use: 'date-current',
                if: viewedDate.getFullYear() === currentDate.getFullYear()
                  && viewedDate.getMonth() === currentDate.getMonth()
                  && date === currentDate.getDate()
              },
              {
                use: 'date-selected',
                if: viewedDate.getFullYear() === selectedDate.getFullYear()
                  && viewedDate.getMonth() === selectedDate.getMonth()
                  && date === selectedDate.getDate()
              }
            )}
            onClick={() => onDateClick(date)}
            key={'current-' + date}
          >{date}</p>
        )
      }
      {
        (lastWeekDay === 6 ? CompatUtils.range(0, 6) : CompatUtils.range(0, 6 - lastWeekDayRaw)).map(date => date + 1).map(date =>
          <p
            className="date date-out clickable clickable-no-animated"
            onClick={() => onNextMonthDateClick(date)}
            key={'next-' + date}
          >{date}</p>)
      }
    </div>
  )
}