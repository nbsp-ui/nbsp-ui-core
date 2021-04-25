import { h } from 'preact'
import { Box } from '../box/Box'

/**
 * @param {VBoxProps} props
 * @returns {*}
 * @constructor
 */
export const VBox = props =>
  <Box
    vertical
    {...props}
  />