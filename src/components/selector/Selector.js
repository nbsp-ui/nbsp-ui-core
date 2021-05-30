// noinspection JSUnusedGlobalSymbols

import { h } from 'preact'
import { useRef } from 'preact/hooks'
import ChevronDownIcon from '../../icons/chevron-down.svg'
import ChevronUpIcon from '../../icons/chevron-up.svg'
import { Environment } from '../../systems/Environment'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Actions } from './Actions'
import './Selector.sass'

/**
 * @param {SelectorProps} props
 * @returns {*}
 * @constructor
 */
export const Selector = props => {
  const [state, dispatch] = ReactHelper.useDispatchedState({
      opened: false
    },
    {
      at: [
        [[props.opened], Actions.Set, { opened: props.opened }]
      ]
    }
  )

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
      {props.label && (
        <p
          className="label"
          style={{
            width: `${props.labelWidth}em` || 'auto'
          }}
        >
          {props.label}
        </p>
      )}
      <input
        type="text"
        readOnly
        placeholder={props.placeholder}
        value={props.value}
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
        {props.children}
      </div>
    </div>
  )
}