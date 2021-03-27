import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import { CompatUtils } from "../../utils/CompatUtils"
import './Select.scss'
import { Box } from "../box/Box"
import { Button, CompatButtonType } from "../button/Button"
import { FAIcon } from "../fa-icon/FAIcon"
import { Input } from "../input/Input"
import { List } from "../list/List"
import { Popup } from "../popup/Popup"
import { CompatAlign } from "../../utils/CompatAlign";

const ids = {
  input: CompatUtils.uid()
}

/**
 * @param {SelectProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Select = props => {
  const {
    id,
    label,
    labelWidth,
    fit,
    placeholder,
    onSelectChange
  } = props

  const openIcons = {
    UP: 'fas fa-chevron-up',
    DOWN: 'fas fa-chevron-down'
  }

  const [value, setValue] = React.useState(props.value || '')
  const [pickerDisplayed, setPickerDisplayed] = React.useState(false)

  const updateInputContent = (items) => {
    setValue(items.length > 1 ? `${items.length} items selected` : items[0]?.value || '')
  }

  const className = ComponentHelper.composeClass('nbsp-ui-select', props.className)
  const style = ComponentHelper.composeStyle(props)

  const [searchValue, setSearchValue] = React.useState('')

  const [selectAll, setSelectAll] = React.useState('')

  return (
    <div id={id} className={className} style={style}>
      <Input
        id={ids.input}
        label={label}
        labelWidth={labelWidth}
        value={value}
        fit={fit}
        placeholder={placeholder}
        after={<FAIcon margin={{ top: 3 }} icon={pickerDisplayed ? openIcons.UP : openIcons.DOWN}/>}
        afterOnClick={() => setPickerDisplayed(!pickerDisplayed)}
      />
      <Popup
        to={CompatUtils.$$(ids.input)}
        showRequested={pickerDisplayed}
        onLeave={() => setPickerDisplayed(false)}
      >
        <div className='header'>
          { props.header && <div onClick={props.headerOnClick}>{ props.header() }</div> }
          {
            props.searchable
            &&
            <Input
              className='search'
              padding={8}
              placeholder='Search...'
              value={searchValue}
              onChange ={(e) => setSearchValue(e.target.value)}
            />
          }
        </div>
        <List
          width={300}
          height={300}
          onChange={(updatedItem, oldItem, selectedItems) => {
            updateInputContent(selectedItems)
            onSelectChange(updatedItem, oldItem, selectedItems)
          }}
          multiselect={props.multiselect}
          data={props.data}
          row={props.row}
          searchValue={searchValue}
          selectAll={selectAll}
        />
        <div className='footer'>
          {
            props.allSelectable
            && <Box padding={8} hAlign={CompatAlign.Center} onClick={(e) => setSelectAll(e)}>
              <Button type={CompatButtonType.Primary} label='Select all' margin={{ right: 8 }} />
            </Box>
          }
          { props.footer && <div onClick={props.footerOnClick}>{ props.footer() }</div> }
        </div>
      </Popup>
    </div>
  )
}