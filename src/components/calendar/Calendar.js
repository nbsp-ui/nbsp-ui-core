import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatLocalization } from '../../utils/CompatLocalization'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { CompatUtils } from '../../utils/CompatUtils'
import '../behavior.scss'
import './Calendar.scss'

/**
 * @param props
 * @param {Date} props.value
 * @param {number} props.width
 * @param {number} props.height
 * @param {function(date: Date): void} props.onChange
 * @constructor
 */
export const Calendar = props => {
  const { value = new Date } = props

  const [viewed_date, view_date] = React.useState(new Date(value.getFullYear(), value.getMonth()))
  const [selected_date, select_date] = React.useState(new Date(value.getFullYear(), value.getMonth(), value.getDate()))

  const className = CompatClassComposer.append(
    'nbsp-ui-calendar'
  )
  const style = CompatStyleComposer.compose(props)

  const current_date = new Date()

  const year = viewed_date.getFullYear()
  const month = viewed_date.getMonth()

  const days_in_month = CompatLocalization.days_in_month(year, month)

  // const first_week_day_raw = CompatLocalization.week_day_raw(year, month, 1)
  const last_week_day_raw = CompatLocalization.week_day_raw(year, month, days_in_month)

  const first_week_day = CompatLocalization.week_day(year, month, 1)
  const last_week_day = CompatLocalization.week_day(year, month, days_in_month)

  const prev_month = CompatLocalization.prev_month(month)
  const next_month = CompatLocalization.next_month(month)

  const prev_month_year = CompatLocalization.prev_month_year(year, month)
  const next_month_year = CompatLocalization.next_month_year(year, month)

  const days_in_prev_month = CompatLocalization.days_in_month(prev_month_year, prev_month)
  // const days_in_next_month = CompatLocalization.days_in_month(next_month_year, next_month)

  const view_month = (year, month) => view_date(new Date(year, month))

  const view_prev_month = () => view_month(prev_month_year, prev_month)

  const view_next_month = () => view_month(next_month_year, next_month)

  const select_current_month_date = date => {
    const result = new Date(year, month, date)
    select_date(result)
    props.onChange && props.onChange(result)
  }

  const select_prev_month_date = date => {
    select_date(new Date(prev_month_year, prev_month, date))
    view_prev_month()
  }

  const select_next_month_date = date => {
    select_date(new Date(next_month_year, next_month, date))
    view_next_month()
  }

  return (
    <div className={className} style={style}>
      <div className='header'>
        <i className="prev clickable fas fa-angle-left" onClick={() => view_prev_month()}/>
        <div className='spacer'/>
        <p className={`month a-once-opacity`}>{CompatLocalization.month_full(viewed_date.getMonth())}</p>
        <p className={`year a-once-opacity`}>{year}</p>
        <div className='spacer'/>
        <i className="next clickable fas fa-angle-right" onClick={() => view_next_month()}/>
      </div>
      <div className='container'>
        {CompatLocalization.week_short_days().map((day, index) => (<p className='day' key={index}>{day}</p>))}

        {
          (first_week_day === 0 ? CompatUtils.range(0, 6) : CompatUtils.range(0, first_week_day - 1)).map((date, index, dates) => days_in_prev_month - dates[dates.length - 1 - index]).map(date =>
            <p
              className='date date-out clickable clickable-no-animated'
              onClick={() => select_prev_month_date(date)}
              key={'prev-' + date}
            >{date}</p>
          )
        }

        {
          CompatUtils.range(1, days_in_month).map(date =>
            <p
              className={CompatClassComposer.append(
                'date clickable clickable-no-animated t-background-color-0-2 t-color-0-2',
                {
                  use: 'date-selected',
                  if: viewed_date.getFullYear() === selected_date.getFullYear()
                    && viewed_date.getMonth() === selected_date.getMonth()
                    && date === selected_date.getDate()
                },
                {
                  use: 'date-current',
                  if: viewed_date.getFullYear() === current_date.getFullYear()
                    && viewed_date.getMonth() === current_date.getMonth()
                    && date !== selected_date.getDate() && date === current_date.getDate()
                }
              )}
              onClick={() => select_current_month_date(date)}
              key={'current-' + date}
            >{date}</p>
          )
        }

        {
          (last_week_day === 6 ? CompatUtils.range(0, 6) : CompatUtils.range(0, 6 - last_week_day_raw)).map(date => date + 1).map(date =>
            <p
              className='date date-out clickable clickable-no-animated'
              onClick={() => select_next_month_date(date)}
              key={'next-' + date}
            >{date}</p>)
        }
      </div>
    </div>
  )
}