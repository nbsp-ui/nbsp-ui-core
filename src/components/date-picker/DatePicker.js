import { format } from 'date-fns'
import { h } from 'preact'
import { useRef } from 'preact/hooks'
import CalendarIcon from '../../icons/calendar.svg'
import { Environment } from '../../systems/Environment'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Calendar } from '../calendar/Calendar'
import { Actions } from './Actions'
import './DatePicker.sass'

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
  const popupElement = useRef()

  ReactHelper.registerGlobalMouseEventListener('mousemove', event =>
    state.opened
    && !CompatUtils.intersects.pointToElementRectWithIndent(
    event.clientX,
    event.clientY,
    element.current.getBoundingClientRect(),
    CompatUtils.empx(2))
    && !CompatUtils.intersects.pointToElementRectWithIndent(
    event.clientX,
    event.clientY,
    popupElement.current.getBoundingClientRect(),
    CompatUtils.empx(2))
    && dispatch(Actions.Close)
  )

  ReactHelper.registerGlobalMouseEventListener('click', event =>
    state.opened
    && !CompatUtils.intersects.pointToElementRect(
    event.clientX,
    event.clientY,
    element.current.getBoundingClientRect())
    && !CompatUtils.intersects.pointToElementRect(
    event.clientX,
    event.clientY,
    popupElement.current.getBoundingClientRect())
    && dispatch(Actions.Close)
  )

  const className = ComponentHelper.composeClass(
    'nbsp-ui-date-picker',
    state.opened && 'nbsp-ui-date-picker-opened',
    props.className
  )

  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      ref={element}
      className={className}
      style={style}
    >
      {props.label && (
        <p
          className="label"
          style={{
            width: props.labelWidth || 'auto'
          }}
        >
          {props.label}
        </p>
      )}
      <input
        type="text"
        readOnly
        placeholder={props.placeholder}
        value={format(state.selectedDate, 'dd.MM.yyyy')}
        onClick={() => dispatch(Actions.Toggle)}
      />
      <div
        className="icon"
        onClick={() => dispatch(Actions.Toggle)}
      >
        <CalendarIcon/>
      </div>
      <div
        ref={popupElement}
        className={ComponentHelper.composeClass(
          'popup',
          state.opened && 'popup-showed'
        )}
        style={{
          zIndex: Environment.getDepth()
        }}
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
      </div>
    </div>
  )
}