import * as React from 'react'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './HDivider.scss'

/**
 * @param {HDividerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const HDivider = props =>
  <div className={ComponentHelper.composeClass('nbsp-ui-h-divider')} style={CompatStyleComposer.compose(props)}/>