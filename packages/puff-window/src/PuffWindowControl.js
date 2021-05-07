import { ComponentHelper, FAIcon } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './PuffWindowControl.sass'

/**
 * @param props
 * @param {boolean} props.expanded
 * @returns {*}
 * @constructor
 */
export const PuffWindowControl = ({ expanded }) => {

  const className = ComponentHelper.composeClass(
    'ui-puff-window-control',
    { use: 'ui-puff-window-control', if: expanded }
  )

  return (
    <div className={className}>
      <div>
        <div>
          <FAIcon icon="fas fa-chevron-left"/>
        </div>
      </div>
      <div>
        <div>
          <FAIcon icon="fas fa-compress"/>
        </div>
      </div>
    </div>
  )
}