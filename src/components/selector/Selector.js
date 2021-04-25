import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { CompatAlign } from '../../utils/CompatAlign'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { HBox } from '../box-h/HBox'
import { Button, CompatButtonType } from '../button/Button'
import { VDivider } from '../divider-v/VDivider'
import { FAIcon } from '../icon-fa/FAIcon'
import { Input } from '../input/Input'
import { List } from '../list/List'
import { Popup } from '../popup/Popup'
import { Spacer } from '../spacer/Spacer'
import './Selector.scss'

/**
 * @param {ListItem[]} items
 * @returns {string}
 */
const buildValue = items => {
  const selectedItems = items.filter(item => item._selected)
  return selectedItems.length === 1 ? selectedItems[0]?.value : `${selectedItems.length} items selected`
}

/**
 * @param {ListItem[]} items
 * @returns {string}
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
 * @param {SelectorProps} props
 * @returns {*}
 * @constructor
 */
export const Selector = props => {
  const { id, label, labelWidth, fit, placeholder } = props

  const refresh = ReactHelper.useRefresh()

  const items = useRef(props.data.map(item => ({
    ...item,
    _id: CompatUtils.uid(),
    _selected: item._selected || false,
    _hidden: item._hidden || false
  })))

  const appliedItems = useRef(items.current)

  const pickerDisplayed = useRef(false)

  const searchValue = useRef('')

  const filter = items => props.filter ? items.filter(props.filter) : items
  const search = items => props.search && searchValue.current.length ? items.filter(item => props.search(item, searchValue.current)) : items

  const applyItems = items => appliedItems.current = items |> filter |> search

  const element = useRef()

  const className = ComponentHelper.composeClass('nbsp-ui-selector', props.className)
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
        after={<FAIcon margin={{ top: 3 }}
                       icon={pickerDisplayed.current ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}/>}
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
        {
          (props.search || props.allSelectable)
          &&
          <HBox className="toolbar" vAlign={CompatAlign.Center} padding={8}>
            {
              props.search
              &&
              <Input
                className="search"
                placeholder="Search..."
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
                    className="selectAllIcon"
                    color="#616161"
                  />
                }
                onClick={() => {
                  const count = appliedItems.current.length
                  const selectedCount = appliedItems.current.reduce((count, item) => item._selected ? ++count : 1, 0)

                  match(true, {
                    [selectedCount < count || selectedCount === 0]: () => appliedItems.current.forEach(item => item._selected = true),
                    [selectedCount === count]: () => appliedItems.current.forEach(item => item._selected = false)
                  })()

                  refresh()
                }}
              />
            }
          </HBox>
        }
        {(props.search || props.allSelectable) && <VDivider/>}
        {props.header && props.header(appliedItems.current)}
        {props.header && <VDivider/>}
        <List
          width={(props.width - (props.labelWidth || 0) - 7) || 300}
          height={props.popupHeight}
          divided
          multiselect={props.multiselect}
          data={appliedItems.current}
          row={props.row}
          onSelectItems={(selected, all) => {
            applyItems(all)
            props.onItemsSelected && props.onItemsSelected(selected, all)
            !props.multiselect && (pickerDisplayed.current = false)
            refresh()
          }}
        />
        {props.footer && <VDivider/>}
        {props.footer && props.footer(appliedItems.current)}
      </Popup>
    </div>
  )
}

Selector.defaultProps = {
  popupHeight: 300
}