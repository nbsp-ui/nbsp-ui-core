import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './HDivider.scss'

/**
 * @param {HDividerProps} props
 * @returns {*}
 * @constructor
 */
export const HDivider = props =>
  <div
    className={ComponentHelper.composeClass('nbsp-ui-h-divider')}
    style={ComponentHelper.composeStyle(props)}
  />