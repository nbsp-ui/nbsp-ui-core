import { h } from 'preact'
import { useState } from 'preact/hooks'
import { CompatAlign } from '../../src/utils/CompatAlign'
import { MainStorage } from '../storage/MainStorage'
import { useLollipop } from '../../src/components/lollipop/LollipopProvider'
import {
  Button,
  CompatButtonType,
  LollipopType,
  FAIcon,
  HBox,
  Input,
  Label,
  Table,
  VBox
} from '../../src'

export const TablePanel = () => {
  const [persons, setPersons] = useState(MainStorage.getPersons())
  const [searchValue, setSearchValue] = useState('')

  const lollipop = useLollipop()
  const personSelectedLollipop = person => lollipop({
    type: LollipopType.Success,
    title: 'Person selected',
    description: `You have selected the user ${person}`,
    indicated: true
  })

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
        height={600}
        margin={{ bottom: 8 }}
        onItemsSelect={({ selected }) => personSelectedLollipop(selected[0].person)}
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
        selectedIds={['1', '2', '8', '9', '12', '18', '24', '36', '40']}
        filter={item => item.person.includes(searchValue)}
      />
      <HBox padding={8}>
        <Input
          placeholder="Search for person"
          width={200}
          margin={{ right: 4 }}
          after={<FAIcon icon={'fas fa-search'} fontSize={16} color='#757575' />}
          value={searchValue}
          onChange={({ currentTarget }) => setSearchValue(currentTarget.value)}
        />
      </HBox>
    </VBox>
  )
}