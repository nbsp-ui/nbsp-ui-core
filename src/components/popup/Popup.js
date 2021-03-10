import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { CompatUtils } from '../../utils/CompatUtils'
import './Popup.scss'

/**
 * @param {PopupProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Popup = props => {
  const { to, showRequested, onBlur, onLeave } = props

  const refForShowRequested = React.useRef(false)
  const refForShowed = React.useRef(false)
  const refForElement = React.useRef()

  const rect = to?.getBoundingClientRect()

  const className = CompatClassComposer.append('nbsp-ui-popup')

  refForShowRequested.current = showRequested
  React.useEffect(() => refForShowed.current = showRequested, [showRequested])

  const handleClick = e => refForShowRequested.current && refForShowed.current && !CompatUtils.math.is_belong_to_element_rect_with_indent(e.x, e.y, refForElement.current['getBoundingClientRect'](), 0) && onBlur()
  const handleMouseMove = e => refForShowRequested.current && refForShowed.current && !CompatUtils.math.is_belong_to_element_rect_with_indent(e.x, e.y, refForElement.current['getBoundingClientRect'](), 40) && onLeave()

  React.useEffect(() => onBlur && (document.addEventListener('click', handleClick) || true) && (() => document.removeEventListener('click', handleClick)), [onBlur])
  React.useEffect(() => onLeave && (document.addEventListener('mousemove', handleMouseMove) || true) && (() => document.removeEventListener('mousemove', handleMouseMove)), [onLeave])

  /**
   * @type {CSSProperties}
   */
  const style = {
    display: showRequested ? 'block' : 'none',
    ...(to ? {
      top: `${rect.height}px`,
      left: `${rect.width}px`,
      transform: 'translateX(-50%)'
    } : {}),
    ...CompatStyleComposer.compose(props)
  }

  return (
    <div className={className} style={style} ref={refForElement}>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}