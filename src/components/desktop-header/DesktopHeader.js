import { h } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { HBox } from '../box-h/HBox'
import { Button, CompatButtonType } from '../button/Button'
import { FAIcon } from '../icon-fa/FAIcon'
import { Label } from '../label/Label'
import './DesktopHeader.scss'

/**
 * @param {DesktopHeaderProps} props
 * @returns {*}
 * @constructor
 */
export const DesktopHeader = ({ title, subtitle }) =>
  <HBox vAlign={CompatAlign.Center} height={36} padding={{ left: 8, right: 8 }} className="nbsp-ui-desktop-header">
    <HBox>
      <Label value={title} margin={{ right: 8 }} className="title"/>
      <Label value={subtitle} className="subtitle"/>
    </HBox>
    <HBox hAlign={CompatAlign.Right}>
      <Button type={CompatButtonType.Icon} icon={<FAIcon icon="far fa-window-minimize"/>}/>
      <Button type={CompatButtonType.Icon} icon={<FAIcon icon="far fa-window-restore"/>}/>
      <Button type={CompatButtonType.Icon} icon={<FAIcon icon="far fa-window-close"/>}/>
    </HBox>
  </HBox>