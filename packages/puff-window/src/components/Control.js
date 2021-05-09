import { ComponentHelper, FAIcon } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './Control.sass'

/**
 * @param props
 * @param {boolean} props.expanded
 * @param {Function} props.onCloseClick
 * @param {Function} props.onOrientClick
 * @returns {*}
 * @constructor
 */
export const Control = ({ expanded, onCloseClick, onOrientClick }) => {
  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-control',
    expanded && 'nbsp-ui-pw-control'
  )

  return (
    <div className={className}>
      <div
        onClick={onCloseClick}
      >
        <FAIcon icon="fas fa-chevron-left"/>
      </div>
      <div
        onClick={onOrientClick}
      >
        <FAIcon icon="fas fa-compress"/>
      </div>
    </div>
  )
}