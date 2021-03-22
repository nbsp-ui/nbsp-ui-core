import React from 'react'
import {
  Box,
  Button, Checkbox,
  CompatButtonType,
  DatePicker,
  DesktopHeader,
  FAIcon,
  Input,
  Label,
  Switch,
  Table
} from '../src/index'
import { CompatAlign } from '../src/utils/CompatAlign'

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
    <Box vertical padding={{ left: 8, right: 8 }} hAlign={CompatAlign.Left}>
      <Input label='Login' labelWidth={140} placeholder='Login' width={400} margin={{ bottom: 8 }} before={'Private'}/>
      <Input label='Password' labelWidth={140} placeholder='Password' width={400} margin={{ bottom: 8 }}/>
      <Input label='Phone' labelWidth={140} placeholder='Phone' width={400} margin={{ bottom: 8 }} before={'+7'}/>
      <Input label='Website' labelWidth={140} placeholder='Website' width={400} margin={{ bottom: 8 }} after={'.com'}/>
      <DatePicker label='Date' labelWidth={140} placeholder='Date' width={400} margin={{ bottom: 8 }}/>
      <Checkbox
        width={400}
        label='Use default settings'
        align={CompatAlign.Justify}
        margin={{ bottom: 8 }}
      />
      <Switch
        width={400}
        label='Enable forced update'
        align={CompatAlign.Justify}
        margin={{ bottom: 8 }}
      />
      <Table
        width={400}
        headerHeight={32}
        footerHeight={32}
        columns={[
          {
            width: 40,
            header: () => <Box hAlign={CompatAlign.Center}><Label value='ID'/></Box>,
            cell: item => <Box hAlign={CompatAlign.Center}><Label value={item['id']}/></Box>,
            sort: (a, b) => a['id'] - b['id']
          },
          {
            header: () => <Box padding={{ x: 8 }}><Label value='Person'/></Box>,
            cell: item => <Box padding={{ x: 8 }}><Label value={item['person']}/></Box>,
            sort: (a, b) => a['person'].localeCompare(b['person'])
          },
          {
            width: 120,
            header: () => <Box padding={{ x: 8 }}><Label value='Account'/></Box>,
            cell: item => <Box padding={{ x: 8 }}><Label value={item['account']}/></Box>,
            sort: (a, b) => a['account'] - b['account'],
            footer: items => <Box padding={{ left: 8 }}><Label value={items.reduce((result, item) => result + item['account'], 0)}/></Box>
          },
          {
            width: 80,
            header: () => <Box hAlign={CompatAlign.Center}><Label value='Remove'/></Box>,
            cell: () =>
              <Box hAlign={CompatAlign.Center}>
                <Button type={CompatButtonType.Icon} icon={<FAIcon icon='far fa-trash-alt'/>}/>
              </Box>
          }
        ]}
        data={[
          { id: '1', person: 'Mary Beth Brianna', account: 125 },
          { id: '2', person: 'Rhys Lyndsea', account: 132 },
          { id: '3', person: 'Bennie Cam', account: 754 },
          { id: '4', person: 'Victor Lana', account: 904 },
          { id: '5', person: 'Jacklyn Marlena', account: 623 },
          { id: '6', person: 'Haleigh Kaylee', account: 396 }
        ]}
      />
    </Box>
  </Box>