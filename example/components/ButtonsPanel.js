import React from 'react'
import { Box, Button, CompatButtonType, FAIcon, OuterLoader } from '../../src'

export const ButtonsPanel = () =>
  <Box padding={8}>
    <Button type={CompatButtonType.Primary} label='Primary' margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Outline} label='Outline' margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Outline} label='Outline with icon' icon={<FAIcon icon='fas fa-robot'/>}
            margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Ghost} label='Ghost' margin={{ right: 8 }}/>
    <Button type={CompatButtonType.Icon} icon={<FAIcon icon='fas fa-sync-alt'/>}/>
    <OuterLoader turn={true} loaderWidth={15}>
      <Button type={CompatButtonType.Outline} label='Processing' margin={{ right: 8 }}/>
    </OuterLoader>
  </Box>