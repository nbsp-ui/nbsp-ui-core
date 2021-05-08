import { ComponentHelper, FAIcon } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './Control.sass'

/**
 * @param props
 * @param {boolean} props.expanded
 * @returns {*}
 * @constructor
 */
export const Control = ({ expanded }) => {

  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-control',
    { use: 'nbsp-ui-pw-control', if: expanded }
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