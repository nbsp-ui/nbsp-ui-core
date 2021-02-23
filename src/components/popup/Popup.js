import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Popup.scss'

/**
 * @param {PopupProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Popup = props => {
  const { to, show, onHide } = props

  const to_rect = to?.getBoundingClientRect()

  const className = CompatClassComposer.append('nbsp-ui-popup')

  /**
   * @type {CSSProperties}
   */
  const style = {
    display: show ? 'block' : 'none',
    ...(to ? {
      top: `${to_rect.height}px`,
      left: `${to_rect.width}px`,
      transform: 'translateX(-50%)'
    } : {}),
    ...CompatStyleComposer.compose(props)
  }

  return (
    <div className={className} style={style}>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}