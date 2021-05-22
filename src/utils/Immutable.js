// noinspection JSUnusedGlobalSymbols

export const Immutable = {
  array: {
    patch: (items, predicate, patcher) => items.map(item => predicate(item) ? patcher(item) : item),

    include: (items, item, predicate) => !predicate || !items.find(predicate) ? [...items, item] : items,

    exclude: (items, predicate) => items.filter(item => !predicate(item)),

    toggle: (items, item, predicate) => items.find(predicate) ? [...items, item] : items.filter(item => !predicate(item))
  }
}