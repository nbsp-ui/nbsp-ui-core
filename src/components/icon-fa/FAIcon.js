import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './FAIcon.scss'

/**
 * @param {FAIconProps} props
 * @returns {*}
 * @constructor
 */
export const FAIcon = props => {
  const { icon, onClick } = props

  const className = ComponentHelper.composeClass('nbsp-ui-fa-icon', props.className)

  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style} onClick={onClick}>
      <i className={icon}/>
    </div>
  )
}