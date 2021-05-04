import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Button, CompatButtonType, DatePicker, FAIcon, HBox, Input, Label, Selector, Spacer, VBox } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'
import { MainStorage } from '../storage/MainStorage'

window['testHook'] = {}

export const FieldsPanel = () => {
  const [countries, setCountries] = useState(MainStorage.getCountries())
  const [selectedCountries, setSelectedCountries] = useState(['Angola'])

  return (
    <VBox padding={{ left: 8, right: 8, bottom: 8 }} hAlign={CompatAlign.Left}>
      <Button
        type={CompatButtonType.Icon}
        icon={<FAIcon icon="fas fa-sync-alt"/>}
        onClick={() => {
          setCountries([...countries])
        }}
      />
      <Input label="Login" labelWidth={140} placeholder="Login" width={400} margin={{ bottom: 8 }} before={'Private'}/>
      <Input label="Password" labelWidth={140} placeholder="Password" width={400} margin={{ bottom: 8 }}/>
      <Input label="Phone" labelWidth={140} placeholder="Phone" width={400} margin={{ bottom: 8 }} before={'+7'}/>
      <Input label="Website" labelWidth={140} placeholder="Website" width={400} margin={{ bottom: 8 }} after={'.com'}/>
      <DatePicker
        label="Date"
        labelWidth={140}
        placeholder="Date"
        width={400}
        margin={{ bottom: 8 }}
        onChange={date => console.log(date)}
      />
      <Selector
        margin={{ bottom: 8 }}
        width={400}
        label={'Country'}
        labelWidth={140}
        placeholder={'Country'}
        fontSize={14}
        row={
          item =>
            <HBox vAlign={CompatAlign.Center} height={28}>
              {
                (item.value.length > 7 || item.value.length < 7)
                  ?
                  <HBox width={40} hAlign={CompatAlign.Center}>
                    <FAIcon icon="far fa-star"/>
                  </HBox>
                  :
                  <Spacer size={40}/>
              }
              <span>{item.value}</span>
            </HBox>
        }
        onItemsSelect={items => console.log(items)}
        multiselect
        allSelectable
        search={(item, value) => item.value.toLowerCase().includes(value.toLowerCase())}
        data={countries}
        selectedValues={selectedCountries}
      />
      <Selector
        margin={{ bottom: 8 }}
        width={400}
        label={'Country (only list)'}
        labelWidth={140}
        placeholder={'Country'}
        fontSize={14}
        popupWidth={800}
        row={item => <span>{item.value}</span>}
        onItemsSelect={items => console.log(items)}
        data={countries}
      />
      <Label
        value="Invalid request"
        hook={window['testHook']}
      />
    </VBox>
  )
}