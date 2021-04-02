import React from 'react'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import './Popup.scss'

/**
 * @param {PopupProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Popup = props => {
  const { to, showed, onBlur } = props

  const showCompleted = React.useRef(false)

  /**
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const element = React.useRef()

  onBlur && ReactHelper.registerGlobalMouseEventListener('click', event =>
    showed
    && showCompleted.current
    && !CompatUtils.math.isBelongToElementRectWithIndent(event.x, event.y, element.current.getBoundingClientRect(), 0)
    && onBlur())

  onBlur && ReactHelper.registerGlobalMouseEventListener('mousemove', event =>
    showed
    && showCompleted.current
    && !CompatUtils.math.isBelongToElementRectWithIndent(event.x, event.y, element.current.getBoundingClientRect(), 40)
    && onBlur())

  React.useEffect(() => showCompleted.current = showed, [showed])

  const rect = to?.getBoundingClientRect()

  return (
    <div
      className={ComponentHelper.composeClass('nbsp-ui-popup')}
      style={{
        display: showed ? 'block' : 'none',
        ...(to ? {
          top: `${rect.height}px`,
          left: `${rect.width}px`,
          transform: `translateX(${props.translateX || '-50%'})`,
          zIndex: CompatUtils.zIndex()
        } : {}),
        ...ComponentHelper.composeStyle(props)
      }}
      ref={element}>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}