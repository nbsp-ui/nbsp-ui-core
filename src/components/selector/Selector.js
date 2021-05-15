import { h } from 'preact'
import { useRef } from 'preact/hooks'
import ChevronDownIcon from '../../icons/chevron-down.svg'
import ChevronUpIcon from '../../icons/chevron-up.svg'
import { Environment } from '../../systems/Environment'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Button, CompatButtonType } from '../button/Button'
import { FAIcon } from '../icon-fa/FAIcon'
import { Input } from '../input/Input'
import { Spacer } from '../spacer/Spacer'
import { Actions } from './Model'
import './Selector.sass'

/**
 * @param {SelectorProps} props
 * @returns {*}
 * @constructor
 */
export const Selector = props => {
  const [state, dispatch] = ReactHelper.useDispatchedState(Actions, {
    items: [],
    appliedItems: [],
    opened: false,
    query: '',
    selection: {},
    label: '',
    icon: ''
  })

  const element = useRef()
  const popupElement = useRef()

  ReactHelper.useDifference(() =>
    dispatch(Actions.Set, { items: props.data.map(item => ({ ...item, _id: CompatUtils.uid() })) }), props.data)

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
    'nbsp-ui-selector',
    state.opened && 'nbsp-ui-selector-opened',
    props.className
  )

  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      ref={element}
      id={props.id}
      className={className}
      style={style}
    >
      <input
        type="text"
        readOnly
        placeholder={props.placeholder}
        value={state.label}
        onClick={() => dispatch(Actions.Toggle)}
      />
      <div
        className="icon"
        onClick={() => dispatch(Actions.Toggle)}
      >
        {state.opened ? <ChevronUpIcon/> : <ChevronDownIcon/>}
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
        {
          (props.search || props.multiselect) && (
            <div
              className="header"
            >
              {props.search && (
                <Input
                  className="search"
                  placeholder="Search..."
                  value={state.query}
                  onChange={event =>
                    dispatch(Actions.Search, {
                      query: event.currentTarget.value,
                      search: props.search,
                      filter: props.filter
                    })
                  }
                />
              )}
              {props.search && props.multiselect && <Spacer size={8}/>}
              {props.multiselect && (
                <Button
                  type={CompatButtonType.Icon}
                  icon={
                    <FAIcon
                      icon={state.icon}
                      color="#616161"
                    />
                  }
                  onClick={() => dispatch(Actions.ToggleEntire)}
                />
              )}
            </div>
          )}
        {(props.search || props.multiselect) && <div className="divider"/>}
        {props.header && props.header(state.appliedItems)}
        {props.header && <div className="divider"/>}
        <div className="content">
          {state.appliedItems.map(item => (
            <div
              className={ComponentHelper.composeClass(
                state.selection[item._id] && 'selected'
              )}
              onClick={() => dispatch(Actions.ToggleItem, { item, multiselect: props.multiselect })}
            >
              {props.row(item)}
            </div>
          ))}
        </div>
        {props.footer && <div className="divider"/>}
        {props.footer && props.footer(state.appliedItems)}
      </div>
    </div>
  )
}
