import { h } from 'preact'
import { Button, CompatButtonType, FAIcon, HBox, LoaderWrapper } from '../../src'

export const ButtonsPanel = () =>
  <HBox padding={8}>
    <Button type={CompatButtonType.Primary} label="Primary" margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Outline} label="Outline" margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Outline} label="Outline with icon" icon={<FAIcon icon="fas fa-robot"/>}
            margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Ghost} label="Ghost" margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Icon} icon={<FAIcon icon="fas fa-sync-alt"/>}/>
    <LoaderWrapper active size={16}>
      <Button type={CompatButtonType.Outline} label="Processing"/>
    </LoaderWrapper>
  </HBox>