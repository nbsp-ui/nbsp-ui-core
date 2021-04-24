import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
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

  const showCompleted = useRef(false)

  /**
   * @type {Ref<HTMLElement>}
   */
  const element = useRef()

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

  useEffect(() => showCompleted.current = showed, [showed])

  const className = ComponentHelper.composeClass('nbsp-ui-popup')

  const rect = to.current?.getBoundingClientRect()

  const style = {
    display: showed ? 'block' : 'none',
    ...(showed ? {
      top: `${rect.height}px`,
      left: `${rect.width}px`,
      transform: `translateX(${props.translateX || '-50%'})`,
      zIndex: CompatUtils.zIndex()
    } : {}),
    ...ComponentHelper.composeStyle(props)
  }

  return (
    <div
      className={className}
      style={style}
      ref={element}>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}