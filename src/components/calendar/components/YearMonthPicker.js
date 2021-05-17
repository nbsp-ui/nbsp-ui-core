import { h } from 'preact'
import { CompatLocalization } from '../../../utils/CompatLocalization'
import { CompatUtils } from '../../../utils/CompatUtils'
import { ComponentHelper } from '../../../utils/ComponentHelper'
import './YearMonthPicker.sass'

/**
 * @param props
 * @param {boolean} visible
 * @param {Date} viewedDate
 * @param {function(month: number): void} onMonthClick
 * @param {function(month: number): void} onYearClick
 * @returns {*}
 * @constructor
 */
export const YearMonthPicker = ({ visible, viewedDate, onMonthClick, onYearClick }) => {
  const years = CompatUtils.range(1980, 2080)

  const currentDate = new Date()

  const renderMonth = (month, index) =>
    <p
      className={ComponentHelper.composeClass(
        'clickable clickable-no-animated',
        month === currentDate.getMonth() && viewedDate.getFullYear() === currentDate.getFullYear() && 'current',
        month === viewedDate.getMonth() && 'viewed'
      )}
      key={index}
      onClick={() => onMonthClick(month)}
    >
      {CompatLocalization.month_full(month)}
    </p>

  return (
    <div className="year-month-picker" style={{ display: visible ? 'block' : 'none' }}>
      <div className="months months-up">
        {CompatUtils.range(0, 5).map(renderMonth)}
      </div>
      <div className="years">
        <div
          className="content"
          style={{
            transform: `translateX(-${(years.findIndex(year => year === viewedDate.getFullYear()) - 2) * 60}px)`
          }}
        >
          {years.map((year, index) =>
            <p
              className={ComponentHelper.composeClass(
                'clickable clickable-no-animated',
                year === currentDate.getFullYear() && 'current',
                year === viewedDate.getFullYear() && 'viewed'
              )}
              key={index}
              onClick={() => onYearClick(year)}
            >
              {year}
            </p>
          )}
        </div>
      </div>
      <div className="months months-down">
        {CompatUtils.range(6, 11).map(renderMonth)}
      </div>
    </div>
  )
}