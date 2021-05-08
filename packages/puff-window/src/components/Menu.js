import { ComponentHelper, FAIcon } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './Menu.sass'
import { MenuSelection } from './MenuSelection'

const composeLeftOffset = selection => ({
  left: 0,
  transform: `translateX(${selection * 100}%)`
})

const composeRightOffset = selection => ({
  right: 0,
  transform: `translateX(-${(2 - selection) * 100}%)`
})

/**
 * @param props
 * @param {boolean} props.expanded
 * @param {number} props.selection
 * @param {Function} props.onSelectionChange
 * @returns {*}
 * @constructor
 */
export const Menu = ({ expanded, selection, onSelectionChange }) => {
  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-menu',
    { use: 'nbsp-ui-pw-menu-expanded', if: expanded }
  )

  return (
    <div className={className}>
      <div
        className="👆"
        style={{
          ...selection === 0 ? composeLeftOffset(selection) : composeRightOffset(selection)
        }}
      >
        <div/>
        <div/>
      </div>
      <div className="🌶">
        <div
          onClick={() => onSelectionChange(MenuSelection.Notifications)}
        >
          <FAIcon icon="far fa-bell"/>
        </div>
        <div/>
        <div
          onClick={() => onSelectionChange(MenuSelection.Settings)}
        >
          <FAIcon icon="fas fa-cog"/>
        </div>
        <div
          onClick={() => onSelectionChange(MenuSelection.Information)}
        >
          <FAIcon icon="fas fa-info"/>
        </div>
      </div>
    </div>
  )
}