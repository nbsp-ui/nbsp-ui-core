import * as React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './VDivider.scss'

/**
 * @param {VDividerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const VDivider = props =>
  <div className={CompatClassComposer.append('nbsp-ui-v-divider')} style={CompatStyleComposer.compose(props)}/>