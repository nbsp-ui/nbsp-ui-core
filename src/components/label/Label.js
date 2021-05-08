import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Label.scss'

/**
 * @param {LabelProps} props
 * @returns {*}
 * @constructor
 */
export const Label = props => {
  const className = ComponentHelper.composeClass('nbsp-ui-label', props.className)

  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className}>
      <span style={style}>
        {props.value}
      </span>
    </div>
  )
}