export const Immutable = {
  array: {
    /**
     * Обновить элемент массива
     *  при условии наличия элемента относительно предиката
     * @param {*[]} items - Массив
     * @param {function(item: *): *} patcher - Возвращает результат обновления элемента
     * @param {function(item: *): boolean} predicate - Предикат поиска элемента
     * @returns {*[]}
     */
    patchItem: (items, predicate, patcher) => items.map(item => predicate(item) ? patcher(item) : item),

    /**
     * Обновить элемент массива (как объект)
     *  при условии наличия элемента относительно соответствия значений указанного ключа
     * @param {{}[]} items
     * @param {{}} patch
     * @param {string} key
     * @returns {{}[]}
     */
    patchObjectByKey: (items, patch, key) =>
      Immutable.array.patchItem(items, item => item[key] === path[key], item => ({ ...item, ...patch })),

    /**
     * Удалить элемент массива
     *  при условии наличия элемента относительно предиката
     * @param {*[]} items
     * @param {function(item: *): boolean} predicate
     * @returns {*[]}
     */
    removeItem: (items, predicate) => items.filter(item => !predicate(item)),

    /**
     * Добавить элемент массива
     *  при условии отсутствия элемента относительно предиката
     * @param {*[]} items
     * @param {*} item
     * @param {function(item: *): boolean} predicate
     * @returns {*[]}
     */
    addItem: (items, item, predicate) => !items.find(predicate) ? [...items, item] : items,

    /**
     * Добавить или удалить элемент массива
     *  при условии наличия или отсутствия относительно предиката
     * @param {*[]} items
     * @param {*} item
     * @param {function(item: *): boolean} predicate
     * @returns {*[]}
     */
    toggleItem: (items, item, predicate) =>
      items.find(predicate) ? [...items, item] : items.filter(item => !predicate(item)),

    /**
     * Добавить или удалить элемент массива (как объект)
     *  при условии наличия или отсутствия относительно соответствия значений указанного ключа
     * @param {{}[]} items
     * @param {{}} item
     * @param {string} key
     * @returns {{}[]}
     */
    toggleObjectByKey: (items, item, key) =>
      Immutable.array.toggleItem(items, item, each => each[key] === item[key])
  }
}