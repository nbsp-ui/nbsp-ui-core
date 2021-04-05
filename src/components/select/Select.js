import React from 'react'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Box } from '../box/Box'
import { Button, CompatButtonType } from '../button/Button'
import { VDivider } from '../divider-v/VDivider'
import { FAIcon } from '../fa-icon/FAIcon'
import { Input } from '../input/Input'
import { List } from '../list/List'
import { Popup } from '../popup/Popup'
import { Spacer } from '../spacer/Spacer'
import './Select.scss'

/**
 * @param {ListItem[]} items
 * @return {string}
 */
const buildValue = items => {
  const selectedItems = items.filter(item => item._selected)
  return selectedItems.length === 1 ? selectedItems[0]?.value : `${selectedItems.length} items selected`
}

/**
 * @param {ListItem[]} items
 * @return {string}
 */
const buildIcon = items => {
  const selectedItems = items.filter(item => item._selected)
  return match(true, {
    [selectedItems.length === items.length]: 'far fa-check-square',
    [selectedItems.length < items.length]: 'far fa-minus-square',
    [selectedItems.length === 0]: 'far fa-square'
  })
}

/**
 * @param {SelectProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Select = props => {
  const { id, label, labelWidth, fit, placeholder } = props

  const refresh = ReactHelper.useRefresh()

  /**
   * @type {React.MutableRefObject<ListItem[]>}
   */
  const items = React.useRef(props.data.map(item => ({
    ...item,
    _id: CompatUtils.uid(),
    _selected: item._selected || false,
    _hidden: item._hidden || false
  })))

  /**
   * @type {React.MutableRefObject<ListItem[]>}
   */
  const appliedItems = React.useRef(items.current)

  const pickerDisplayed = React.useRef(false)

  const searchValue = React.useRef('')

  const filter = items => props.filter ? items.filter(props.filter) : items
  const search = items => props.search && searchValue.current.length ? items.filter(item => props.search(item, searchValue.current)) : items

  const applyItems = items => appliedItems.current = items |> filter |> search

  const element = React.useRef()

  const className = ComponentHelper.composeClass('nbsp-ui-select', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div id={id} className={className} style={style}>
      <Input
        reference={element}
        label={label}
        labelWidth={labelWidth}
        width={props.width || 300}
        value={buildValue(items.current)}
        fit={fit}
        placeholder={placeholder}
        after={<FAIcon margin={{ top: 3 }} icon={pickerDisplayed.current ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}/>}
        afterOnClick={() => {
          pickerDisplayed.current = true
          refresh()
        }}
      />
      <Popup
        to={element}
        translateX={'-100%'}
        showed={pickerDisplayed.current}
        onBlur={() => {
          pickerDisplayed.current = false
          refresh()
        }}
      >
        <Box className='toolbar' vAlign={CompatAlign.Center} padding={8}>
          {
            props.search
            &&
            <Input
              className='search'
              placeholder='Search...'
              value={searchValue.current}
              onChange={event => {
                searchValue.current = event.currentTarget.value
                applyItems(items.current)
                refresh()
              }}
            />
          }
          {props.search && props.allSelectable && <Spacer size={8}/>}
          {
            props.allSelectable
            &&
            <Button
              type={CompatButtonType.Icon}
              icon={
                <FAIcon
                  icon={buildIcon(items.current)}
                  className='selectAllIcon'
                  color='#616161'
                />
              }
              onClick={() => {
                const count = appliedItems.current.length
                const selectedCount = appliedItems.current.reduce((count, item) => item._selected ? ++count : 1, 0)

                match(true, {
                  [selectedCount < count || selectedCount === 0]: () => appliedItems.current.forEach(item => item._selected = true),
                  [selectedCount === count]: () => appliedItems.current.forEach(item => item._selected = false),
                })()

                refresh()
              }}
            />
          }
        </Box>
        {(props.search || props.allSelectable) && <VDivider/>}
        {props.header && props.header(appliedItems.current)}
        {props.header && <VDivider/>}
        <List
          width={(props.width - (props.labelWidth || 0) - 7) || 300}
          height={300}
          onSelectItems={(selected, all) => {
            applyItems(all)
            props.onItemsSelected && props.onItemsSelected(selected, all)
            !props.multiselect && (pickerDisplayed.current = false)
            refresh()
          }}
          multiselect={props.multiselect}
          data={appliedItems.current}
          row={props.row}
        />
        {props.footer && <VDivider/>}
        {props.footer && props.footer(appliedItems.current)}
      </Popup>
    </div>
  )
}