import React from 'react'
import {
  Box,
  Button,
  CompatButtonType,
  FAIcon,
  Input,
  Label,
  List,
  Loader,
  LoaderWrapper,
  Progress,
  Switch, Table
} from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'
import { MainStorage } from '../storage/MainStorage'

export const ProgressPanel = () => {
  const [progressValue, setProgressValue] = React.useState(50)
  const [listLoading, setListLoading] = React.useState(false)

  return (
    <Box vertical padding={{ x: 8 }} hAlign={CompatAlign.Left}>
      <Box margin={{ bottom: 8 }} vAlign={CompatAlign.Center}>
        <Label width={140} value='Loader' color='#757575'/>
        <Box width={430} hAlign={CompatAlign.Center} vAlign={CompatAlign.Center}>
          <Loader size={25} strokeWidth={5}/>
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
              <Button type={CompatButtonType.Outline} label='20%' margin={{ right: 8 }}
                      onClick={() => setProgressValue(20)}/>
              <Button type={CompatButtonType.Outline} label='40%' margin={{ right: 8 }}
                      onClick={() => setProgressValue(40)}/>
              <Button type={CompatButtonType.Outline} label='60%' margin={{ right: 8 }}
                      onClick={() => setProgressValue(60)}/>
            </Box>
            <Box vAlign={CompatAlign.Center}>
              <Button type={CompatButtonType.Outline} label='80%' margin={{ right: 8 }}
                      onClick={() => setProgressValue(80)}/>
              <Button type={CompatButtonType.Outline} label='100%' margin={{ right: 8 }}
                      onClick={() => setProgressValue(100)}/>
              <Button type={CompatButtonType.Outline} label='120%' margin={{ right: 8 }}
                      onClick={() => setProgressValue(120)}/>
            </Box>
          </Box>
          <Progress progress={progressValue} radius={40} valueDisplay/>
        </Box>
      </Box>
      <Switch
        width={400}
        label='Turn loading'
        align={CompatAlign.Justify}
        margin={{ y: 8 }}
        onChange={(checked) => setListLoading(checked)}
      />
      <LoaderWrapper active={listLoading}>
        <List
          width={400}
          margin={{ bottom: 8 }}
          fontSize={14}
          divided
          row={
            (item) =>
              <Box vAlign={CompatAlign.Center} margin={{ top: 7, bottom: 7 }} height={20}>
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
          data={MainStorage.getCountries().slice(0, 6)}
        />
      </LoaderWrapper>
      <LoaderWrapper active={listLoading}>
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
          data={MainStorage.getPersons()}
        />
      </LoaderWrapper>
    </Box>
  )
}