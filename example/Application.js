import React from 'react'
import { Box, Button, CompatButtonType, DatePicker, DesktopHeader , Input, FAIcon } from '../src/index'

export const Application = () =>
  <Box vertical>
    <DesktopHeader title='Прототип модуля' subtitle='React & Custom components'/>
    <Box padding={8}>
      <Button type={CompatButtonType.Primary} label='Primary' margin={{ right: 8 }}/>
      <Button type={CompatButtonType.Outline} label='Outline' margin={{ right: 8 }}/>
      <Button type={CompatButtonType.Outline} label='Outline with icon' icon={<FAIcon icon='fas fa-robot'/>}
              margin={{ right: 8 }}/>
      <Button type={CompatButtonType.Ghost} label='Ghost' margin={{ right: 8 }}/>
      <Button type={CompatButtonType.Icon} icon={<FAIcon icon='fas fa-sync-alt'/>}/>
    </Box>
    <Box vertical padding={{ left: 8, right: 8 }}>
      <Input label='Login' labelWidth={100} placeholder='Login' width={400} margin={{ bottom: 8 }} before={'Private'}/>
      <Input label='Password' labelWidth={100} placeholder='Password' width={400} margin={{ bottom: 8 }}/>
      <Input label='Phone' labelWidth={100} placeholder='Phone' width={400} margin={{ bottom: 8 }} before={'+7'}/>
      <Input label='Website' labelWidth={100} placeholder='Website' width={400} margin={{ bottom: 8 }} after={'.com'}/>
      <DatePicker label='Date' labelWidth={100} placeholder='Date' width={400} margin={{ bottom: 8 }}/>
    </Box>
  </Box>