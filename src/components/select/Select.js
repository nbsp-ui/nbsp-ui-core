import React from 'react'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Select.scss'
import { Box } from '../box/Box'
import { Button, CompatButtonType } from '../button/Button'
import { FAIcon } from '../fa-icon/FAIcon'
import { Input } from '../input/Input'
import { List } from '../list/List'
import { Popup } from '../popup/Popup'
import { CompatAlign } from '../../utils/CompatAlign'

const openIcons = {
  UP: 'fas fa-chevron-up',
  DOWN: 'fas fa-chevron-down'
}

/**
 * @param {SelectProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Select = props => {
  const { id, label, labelWidth, fit, placeholder, onSelectChange } = props

  const [value, setValue] = React.useState(props.value || '')
  const [searchValue, setSearchValue] = React.useState('')
  const [selectAll, setSelectAll] = React.useState('')
  const [pickerDisplayed, setPickerDisplayed] = React.useState(false)

  const element = React.useRef()

  const updateInputContent = items => setValue(items.length > 1 ? `${items.length} items selected` : items[0]?.value || '')

  const className = ComponentHelper.composeClass('nbsp-ui-select', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div id={id} className={className} style={style}>
      <Input
        reference={element}
        label={label}
        labelWidth={labelWidth}
        width={props.width || 300}
        value={value}
        fit={fit}
        placeholder={placeholder}
        after={<FAIcon margin={{ top: 3 }} icon={pickerDisplayed ? openIcons.UP : openIcons.DOWN}/>}
        afterOnClick={() => setPickerDisplayed(!pickerDisplayed)}
      />
      <Popup
        to={element}
        translateX={'-100%'}
        showed={pickerDisplayed}
        onBlur={() => setPickerDisplayed(false)}
      >
        <div className='header'>
          {
            <Box vAlign={CompatAlign.Center} hAlign={CompatAlign.Center}>
              {
                props.searchable
                &&
                <Input
                  className='search'
                  padding={8}
                  placeholder='Search...'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              }
              {
                props.allSelectable
                &&
                <Button
                  type={CompatButtonType.Icon}
                  icon={
                    <FAIcon
                      icon={'far fa-check-circle'}
                      className='selectAllIcon'
                      color={'#616161'}
                      onClick={(e) => setSelectAll(e)}
                    />
                  }
                />
              }
            </Box>
          }
          { props.header && <div onClick={props.headerOnClick}>{ props.header() }</div> }
        </div>
        <List
          width={(props.width - (props.labelWidth || 0) - 7) || 300}
          height={300}
          onChange={(updatedItem, oldItem, selectedItems) => {
            updateInputContent(selectedItems)
            onSelectChange(updatedItem, oldItem, selectedItems)
            props.multiselect || setPickerDisplayed(false)
          }}
          multiselect={props.multiselect}
          data={props.data}
          row={props.row}
          searchValue={searchValue}
          selectAll={selectAll}
        />
        <div className='footer'>
          { props.footer && <div onClick={props.footerOnClick}>{ props.footer() }</div> }
        </div>
      </Popup>
    </div>
  )
}