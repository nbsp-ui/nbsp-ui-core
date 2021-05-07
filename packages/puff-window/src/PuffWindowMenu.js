import { ComponentHelper, FAIcon } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './PuffWindowMenu.sass'

/**
 * @param props
 * @param {boolean} props.expanded
 * @returns {*}
 * @constructor
 */
export const PuffWindowMenu = ({ expanded }) => {
  const className = ComponentHelper.composeClass(
    'ui-puff-window-menu',
    { use: 'ui-puff-window-menu-expanded', if: expanded }
  )

  return (
    <div className={className}>
      <div className="👆">
        <div/>
        <div/>
      </div>
      <div className="🌶">
        <div className="🆔">
          <div>
            <FAIcon icon="far fa-bell"/>
          </div>
        </div>
        <div className="↔"/>
        <div className="🆔">
          <div>
            <FAIcon icon="fas fa-cog"/>
          </div>
        </div>
        <div className="🆔">
          <div>
            <FAIcon icon="fas fa-info"/>
          </div>
        </div>
      </div>
    </div>
  )
}