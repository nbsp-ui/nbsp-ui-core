import { h } from 'preact'
import { CompatLocalization } from '../../../utils/CompatLocalization'
import './Header.sass'

/**
 * @param props
 * @param {Date} viewedDate
 * @param {function(): void} onPrevMonthClick
 * @param {function(): void} onNextMonthClick
 * @returns {*}
 * @constructor
 */
export const Header = ({ viewedDate, onPrevMonthClick, onNextMonthClick, onTitleClick }) => {
  return (
    <div className="header">
      <i className="prev-month clickable fas fa-angle-left" onClick={onPrevMonthClick}/>
      <div className="title" onClick={onTitleClick}>
        <p className="month">{CompatLocalization.month_full(viewedDate.getMonth())}</p>
        <p className="month-number">{`0${viewedDate.getMonth() + 1}`.slice(-2)}</p>
        <p className="year">{viewedDate.getFullYear()}</p>
      </div>
      <i className="next-month clickable fas fa-angle-right" onClick={onNextMonthClick}/>
    </div>
  )
}