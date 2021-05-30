import { CompatUtils } from '../../utils/CompatUtils'

export const Actions = {
  'ToggleItem': ({ items, selection }, { item, multiselect }) => {
    const mutatedSelection = multiselect ? { ...selection, [item._id]: !selection[item._id] } : { [item._id]: true }

    return ({
      selection: mutatedSelection,
      label: buildLabel(items, mutatedSelection),
      icon: buildIcon(items, mutatedSelection)
    })
  },
  'ToggleEntire': ({ items, selection }) => {
    const count = items.length
    const selectionCount = Object.values(selection).filter(value => value).length

    const mutatedSelection = match(true, {
      [selectionCount < count || selectionCount === 0]: items.reduce((result, { _id }) => ({
        ...result,
        [_id]: true
      }), {}),
      [selectionCount === count]: {}
    })

    return {
      selection: mutatedSelection,
      label: buildLabel(items, mutatedSelection),
      icon: buildIcon(items, mutatedSelection)
    }
  },
  'Search': ({ items }, { query, filter, search }) => ({
    query,
    appliedItems: applySearch(applyFilter(items, filter), search, query)
  }),
  'Set': ({ selection, query }, { items, filter, search }) => {
    items = items.map(item => ({ ...item, _id: CompatUtils.uid() }))

    return ({
      items: items,
      appliedItems: applySearch(applyFilter(items, filter), search, query),
      label: buildLabel(items, selection),
      icon: buildIcon(items, selection)
    })
  }
}

const applyFilter = (items, filter) =>
  filter
    ? items.filter(filter)
    : items

const applySearch = (items, search, query) =>
  search && query.length
    ? items.filter(item => search(item, query))
    : items

const buildLabel = (items, selection) => {
  const count = Object.values(selection).filter(value => value).length

  return count === 1 ? items.find(({ _id }) => selection[_id]).value : `${count} items selected`
}

const buildIcon = (items, selection) => {
  const count = Object.values(selection).filter(value => value).length

  return match(true, {
    [count === items.length]: 'far fa-check-square',
    [count < items.length]: 'far fa-minus-square',
    [count === 0]: 'far fa-square'
  })
}