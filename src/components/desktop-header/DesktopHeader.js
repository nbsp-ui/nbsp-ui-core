import { h } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { Box } from '../box/Box'
import { Button, CompatButtonType } from '../button/Button'
import { FAIcon } from '../icon-fa/FAIcon'
import { Label } from '../label/Label'
import './DesktopHeader.scss'

/**
 * @param {DesktopHeaderProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const DesktopHeader = ({ title, subtitle }) =>
  <Box vAlign={CompatAlign.Center} height={36} padding={{ left: 8, right: 8 }} className='nbsp-ui-desktop-header'>
    <Box>
      <Label value={title} margin={{ right: 8 }} className='title'/>
      <Label value={subtitle} className='subtitle'/>
    </Box>
    <Box hAlign={CompatAlign.Right}>
      <Button type={CompatButtonType.Icon} icon={<FAIcon icon='far fa-window-minimize'/>}/>
      <Button type={CompatButtonType.Icon} icon={<FAIcon icon='far fa-window-restore'/>}/>
      <Button type={CompatButtonType.Icon} icon={<FAIcon icon='far fa-window-close'/>}/>
    </Box>
  </Box>