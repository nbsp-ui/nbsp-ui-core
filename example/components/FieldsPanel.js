import React from 'react'
import { Box, DatePicker, FAIcon, Input, Label, Select, Spacer } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'
import { MainStorage } from '../storage/MainStorage'

window['testHook'] = {}

export const FieldsPanel = () =>
  <Box vertical padding={{ left: 8, right: 8, bottom: 8 }} hAlign={CompatAlign.Left}>
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
      row={
        item =>
          <Box vAlign={CompatAlign.Center} height={20}>
            {
              (item.value.length > 7 || item.value.length < 7)
                ?
                <Box width={40} hAlign={CompatAlign.Center}>
                  <FAIcon icon='far fa-star'/>
                </Box>
                :
                <Spacer size={40}/>
            }
            <span>{item.value}</span>
          </Box>
      }
      onItemsSelected={items => console.log(items)}
      multiselect
      allSelectable
      search={(item, value) => item.value.toLowerCase().includes(value.toLowerCase())}
      data={MainStorage.getCountries()}
    />
    <Label
      value='Invalid request'
      hook={window['testHook']}
    />
  </Box>