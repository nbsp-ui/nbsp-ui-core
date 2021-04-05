import React from 'react'
import { Box, Button, CompatButtonType, FAIcon, Label, Table } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'
import { MainStorage } from '../storage/MainStorage'

export const TablePanel = () =>
  <Box padding={8}>
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
          footer: items => <Box padding={{ left: 8 }}><Label
            value={items.reduce((result, item) => result + item['account'], 0)}/></Box>
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
  </Box>