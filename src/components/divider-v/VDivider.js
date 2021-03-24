import * as React from 'react'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './VDivider.scss'

/**
 * @param {VDividerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const VDivider = props =>
  <div className={ComponentHelper.composeClass('nbsp-ui-v-divider')} style={CompatStyleComposer.compose(props)}/>