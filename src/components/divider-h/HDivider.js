import * as React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './HDivider.scss'

/**
 * @param {HDividerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const HDivider = props =>
  <div className={CompatClassComposer.append('nbsp-ui-h-divider')} style={CompatStyleComposer.compose(props)}/>