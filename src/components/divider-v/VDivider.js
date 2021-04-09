import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './VDivider.scss'

/**
 * @param {VDividerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const VDivider = props =>
  <div
    className={ComponentHelper.composeClass('nbsp-ui-v-divider')}
    style={ComponentHelper.composeStyle(props)}
  />