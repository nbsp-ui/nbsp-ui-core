import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  CompatButtonType,
  DatePicker,
  DesktopHeader,
  FAIcon,
  Input,
  Label,
  List,
  Switch,
  Table,
  Tag,
  VDivider,
  Select,
  Loader,
  OuterLoader,
  Progress,
  Tabs,
  Accordion
} from '../src/index'
import { CompatAlign } from '../src/utils/CompatAlign'

window['testHook'] = {}

export const Application = () => {

  const [progressValue, setProgressValue] = React.useState(50)
  const [listLoading, setListLoading] = React.useState(false)

  return (
    <Box vertical>
      <DesktopHeader title='Прототип модуля' subtitle='React & Custom components'/>
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
      <VDivider/>
      <Box padding={8}>
        <Tag value='Manufacturing' color='#757575' borderColor='#E0E0E0' backgroundColor='#FAFAFA'
             onClick={() => alert('Clicked')}/>
        <Tag value='Finance' color='#FB8C00' borderColor='#FFCC80' backgroundColor='#FFF3E0'/>
        <Tag value='Marketing' color='#E53935' borderColor='#ef9a9a' backgroundColor='#ffebee'/>
        <Tag value='Customer Service' color='#43A047' borderColor='#A5D6A7' backgroundColor='#E8F5E9'/>
        <Tag value='Human Resources' color='#1E88E5' borderColor='#90CAF9' backgroundColor='#E3F2FD'/>
        <Tag value='Procurement' color='#26a69a' onClose={() => alert('Closed')}/>
        <Tag value='Communications' color='#1E88E5'/>
        <Tag value='Legal' color='#FFFFFF' borderColor='#1E88E5' backgroundColor='#1E88E5'/>
      </Box>
      <Box vertical padding={{ left: 8, right: 8 }} hAlign={CompatAlign.Left}>
        <Input label='Login' labelWidth={140} placeholder='Login' width={400} margin={{ bottom: 8 }} before={'Private'}/>
        <Input label='Password' labelWidth={140} placeholder='Password' width={400} margin={{ bottom: 8 }}/>
        <Input label='Phone' labelWidth={140} placeholder='Phone' width={400} margin={{ bottom: 8 }} before={'+7'}/>
        <Input label='Website' labelWidth={140} placeholder='Website' width={400} margin={{ bottom: 8 }} after={'.com'}/>
        <DatePicker label='Date' labelWidth={140} placeholder='Date' width={400} margin={{ bottom: 8 }}/>
        <Select
          width={400}
          margin={{ bottom: 8 }}
          label={'Country'}
          labelWidth={140}
          placeholder={'Country'}
          fontSize={14}
          headerOnClick={ () => console.log('header click') }
          row={
            (item) =>
              <Box vAlign={CompatAlign.Center} height={20}>
                {
                  (item.value.length > 7 || item.value.length < 7)
                    ?
                    <Box width={30}>
                      <FAIcon icon='fas fa-star'/>
                    </Box>
                    :
                    <Box width={30}>
                    </Box>
                }
                <span>{item.value}</span>
              </Box>
          }
          footerOnClick={ () => console.log('footer click') }
          onSelectChange={(updatedItem, oldItem) => console.log(updatedItem, oldItem)}
          multiselect
          searchable
          allSelectable
          data={[
            { id: 1, value: 'Albania' },
            { id: 2, value: 'Algeria' },
            { id: 3, value: 'Andorra' },
            { id: 4, value: 'Angola' },
            { id: 5, value: 'Antigua and Barbuda' },
            { id: 6, value: 'Argentina' },
            { id: 7, value: 'Armenia' },
            { id: 8, value: 'Australia' },
            { id: 9, value: 'Austria' },
            { id: 10, value: 'Azerbaijan' },
            { id: 11, value: 'Bahrain' },
            { id: 12, value: 'Bangladesh' },
            { id: 13, value: 'Barbados' },
            { id: 14, value: 'Belarus' },
            { id: 15, value: 'Belgium' },
            { id: 16, value: 'Belize' },
            { id: 17, value: 'Benin' },
            { id: 18, value: 'Bhutan' },
            { id: 19, value: 'Bolivia' },
            { id: 20, value: 'Bosnia and Herzegovina' },
            { id: 21, value: 'Botswana' },
            { id: 22, value: 'Brazil' },
            { id: 23, value: 'Brunei' },
            { id: 24, value: 'Bulgaria' },
            { id: 25, value: 'Burkina Faso' },
            { id: 26, value: 'Burundi' },
            { id: 27, value: 'Cambodia' },
            { id: 28, value: 'Cameroon' },
            { id: 29, value: 'Canada' },
            { id: 30, value: 'Cape Verde' },
            { id: 31, value: 'Central African Republic' },
            { id: 32, value: 'Chad' }
          ]}
        />
        <Box margin={{ bottom: 8 }} vAlign={CompatAlign.Center}>
          <Label width={140} value={'Loader'} color={'#757575'} />
          <Box width={430} hAlign={CompatAlign.Center} vAlign={CompatAlign.Center}>
            <Loader width={25} strokeWidth={5} />
          </Box>
        </Box>
        <Box vertical>
          <Input
            label='Percentage'
            labelWidth={140}
            width={400}
            margin={{ bottom: 8, right: 8 }}
            value={progressValue}
            rule={(value) => Number(value) <= 100}
            onChange={(e) => setProgressValue(e.target.value)}
          />
          <Box width={400}>
            <Box width={300} vertical>
              <Box vAlign={CompatAlign.Center}>
                <Button type={CompatButtonType.Outline} label='20%' margin={{ top: -1, right: 8 }} onClick={() => setProgressValue(20)}/>
                <Button type={CompatButtonType.Outline} label='40%' margin={{ top: -1, right: 8 }} onClick={() => setProgressValue(40)}/>
                <Button type={CompatButtonType.Outline} label='60%' margin={{ top: -1, right: 8 }} onClick={() => setProgressValue(60)}/>
              </Box>
              <Box vAlign={CompatAlign.Center}>
                <Button type={CompatButtonType.Outline} label='80%' margin={{ top: -1, right: 8 }} onClick={() => setProgressValue(80)}/>
                <Button type={CompatButtonType.Outline} label='100%' margin={{ top: -1, right: 8 }} onClick={() => setProgressValue(100)}/>
                <Button type={CompatButtonType.Outline} label='120%' margin={{ top: -1, right: 8 }} onClick={() => setProgressValue(120)}/>
              </Box>
            </Box>
            <Progress progress={progressValue} radius={40} valueDisplay />
          </Box>
        </Box>
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
        <Label
          value='Invalid request'
          hook={window['testHook']}
        />
        <Table
          width={400}
          headerHeight={32}
          footerHeight={32}
          margin={{ bottom: 8 }}
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
        <Tabs width={400} margin={{ bottom: 8 }}
          onChange={(updatedItem, oldItem) => console.log({ updatedItem, oldItem })}
          onClose={(item) => console.log({ item })}
          tabs={[
            { header: 'Main', icon: 'fas fa-home' },
            { header: 'Second', icon: 'fab fa-ethereum', closable: true },
            { header: 'Optional', closable: true },
            { header: 'Extra' }
          ]}
        />
        <Accordion collapsed width={400} contentHeight={150} margin={{ bottom: 8 }} header={'First'}>
          <div style={{ color: '#9E9E9E', fontSize: '0.95em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </Accordion>
        <Accordion collapsed width={400} contentHeight={150} margin={{ bottom: 8 }} header={'Second'}>
          <div style={{ color: '#9E9E9E', fontSize: '0.95em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </Accordion>
        <Accordion collapsed width={400} contentHeight={150} margin={{ bottom: 8 }} header={'Third'}>
          <Switch
            width={400}
            label='Third switch'
            align={CompatAlign.Justify}
            margin={{ bottom: 8 }}
            onChange={(checked) => setListLoading(checked)}
          />
          <Tag value='Third tag' color='#1E88E5' width={50} />
        </Accordion>
        <Switch
          width={400}
          label='Turn loading'
          align={CompatAlign.Justify}
          margin={{ bottom: 8 }}
          onChange={(checked) => setListLoading(checked)}
        />
        <OuterLoader turn={listLoading}>
          <List
            width={400}
            height={250}
            margin={{ bottom: 8 }}
            fontSize={14}
            row={
              (item) =>
                <Box vAlign={CompatAlign.Center} height={20}>
                  {
                    (item.value.length > 7 || item.value.length < 7)
                      ?
                      <Box width={30}>
                        <FAIcon icon='far fa-star'/>
                      </Box>
                      :
                      <Box width={30}>
                      </Box>
                  }
                  <span>{item.value}</span>
                </Box>
            }
            data={[
              { id: 1, value: 'Albania' },
              { id: 2, value: 'Algeria' },
              { id: 3, value: 'Andorra' },
              { id: 4, value: 'Angola' },
              { id: 5, value: 'Antigua and Barbuda' },
              { id: 6, value: 'Argentina' },
              { id: 7, value: 'Armenia' },
              { id: 8, value: 'Australia' }
            ]}
            onChange={(updatedItem, oldItem) => console.log(updatedItem, oldItem)}
          />
        </OuterLoader>
        <OuterLoader turn={listLoading}>
          <Table
            width={400}
            headerHeight={32}
            footerHeight={32}
            margin={{ bottom: 8 }}
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
        </OuterLoader>
      </Box>
    </Box>
  )
}