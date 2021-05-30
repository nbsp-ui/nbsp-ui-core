import { CompatUtils } from '../../utils/CompatUtils'

export const Actions = {
  'SetItems': (_, { items, filter }) => {
    items = items.map(item => ({
      ...item,
      _id: CompatUtils.uid(),
      _selected: item._selected || false
    }))

    return ({
      items,
      appliedItems: applyFilter(items, filter)
    })
  },
  'SetColumns': (_, { columns }) => ({
    columns: columns.map((column, index) => ({
      ...column,
      _id: CompatUtils.uid(),
      _position: index
    }))
  }),
  'FilterItems': ({ items }, { filter }) => ({
    appliedItems: applyFilter(items, filter)
  }),
  'ToggleItem': ({ items, selection }, { item, multiselect }) => ({
    selection: multiselect ? { ...selection, [item._id]: !selection[item._id] } : { [item._id]: true }
  }),
  'SelectItems': ({}, { selection }) => ({
    selection: selection.reduce((result, id) => ({ ...result, [id]: true }))
  }),
  'SortColumn': ({ items, appearance }, { column }) => {
    const type = match(appearance[column._id] || 0, { 0: 1, 1: 2, 2: 0 })

    const appliedItems = match(type, {
      1: items.slice().sort((a, b) => column.sort(a, b)),
      2: items.slice().sort((a, b) => -column.sort(a, b))
    })

    return ({
      appearance: { [column._id]: type },
      appliedItems
    })
  },
  'Refresh': () => ({})
}

const applyFilter = (items, filter) =>
  filter
    ? items.filter(filter)
    : items