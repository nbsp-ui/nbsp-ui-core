import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Tag.scss'

/**
 * @param {TagProps} props
 * @returns {*}
 * @constructor
 */
export const Tag = props => {
  const { value, onClick, onClose } = props

  const className = ComponentHelper.composeClass(
    'nbsp-ui-tag',
    onClick && 'nbsp-ui-tag-clickable',
    props.className
  )

  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      className={className}
      style={style}
      onClick={() => onClick && onClick()}
    >
      <span>{value}</span>
      {onClose && <div className="spacer"/>}
      {onClose && <div className="close" onClick={() => onClose()}><i className="fas fa-times"/></div>}
    </div>
  )
}