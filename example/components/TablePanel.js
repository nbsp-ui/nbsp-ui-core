import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Button, CompatButtonType, FAIcon, HBox, Label, Table, VBox } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'
import { MainStorage } from '../storage/MainStorage'

export const TablePanel = () => {
  const [persons, setPersons] = useState(MainStorage.getPersons())

  return (
    <VBox padding={8}>
      <Button
        type={CompatButtonType.Icon}
        icon={<FAIcon icon="fas fa-sync-alt"/>}
        onClick={() => {
          setPersons([...persons])
        }}
      />
      <Table
        headerHeight={32}
        footerHeight={32}
        margin={{ bottom: 8 }}
        columns={[
          {
            width: 40,
            header: () => <HBox hAlign={CompatAlign.Center}><Label value="ID"/></HBox>,
            cell: item => <HBox hAlign={CompatAlign.Center}><Label value={item['id']}/></HBox>,
            sort: (a, b) => a['id'] - b['id']
          },
          {
            header: () => <HBox padding={{ x: 8 }}><Label value="Person"/></HBox>,
            cell: item => <HBox padding={{ x: 8 }}><Label value={item['person']}/></HBox>,
            sort: (a, b) => a['person'].localeCompare(b['person'])
          },
          {
            width: 120,
            header: () => <HBox padding={{ x: 8 }}><Label value="Account"/></HBox>,
            cell: item => <HBox padding={{ x: 8 }}><Label value={item['account']}/></HBox>,
            sort: (a, b) => a['account'] - b['account'],
            footer: items => <HBox padding={{ left: 8 }}><Label
              value={items.reduce((result, item) => result + item['account'], 0)}/></HBox>
          },
          {
            width: 80,
            header: () => <HBox hAlign={CompatAlign.Center}><Label value="Remove"/></HBox>,
            cell: () =>
              <HBox hAlign={CompatAlign.Center}>
                <Button type={CompatButtonType.Icon} icon={<FAIcon icon="far fa-trash-alt"/>}/>
              </HBox>
          }
        ]}
        data={persons}
      />
    </VBox>
  )
}