import { ComponentHelper, FAIcon } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './PuffWindowHeader.sass'

/**
 * @param props
 * @param {string} props.title
 * @param {string} props.icon
 * @param {boolean} props.expanded
 * @param {Function} props.onClick
 * @returns {*}
 * @constructor
 */
export const PuffWindowHeader = ({ title, icon, expanded, onClick }) => {
  const className = ComponentHelper.composeClass(
    'ui-puff-window-header',
    { use: 'ui-puff-window-header-expanded', if: expanded }
  )

  return (
    <div
      className={className}
      onClick={onClick}
    >
      <div className="🖼">
        {title && <p>{title.charAt(0).toUpperCase()}</p>}
        {icon && <FAIcon icon={icon}/>}
      </div>
      <p className="✏">
        {title}
      </p>
    </div>
  )
}