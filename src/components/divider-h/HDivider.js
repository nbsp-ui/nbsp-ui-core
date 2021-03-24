import * as React from 'react'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './HDivider.scss'

/**
 * @param {HDividerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const HDivider = props =>
  <div className={ComponentHelper.composeClass('nbsp-ui-h-divider')} style={ComponentHelper.composeStyle(props)}/>