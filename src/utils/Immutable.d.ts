// noinspection JSUnusedGlobalSymbols

export namespace Immutable {
  namespace array {
    /**
     * Обновить элемент массива
     *  при условии наличия элемента относительно предиката
     * @param items
     * @param predicate
     * @param patcher
     */
    function patch<T>(items: T[], predicate: (item: T) => boolean, patcher: (item: T) => T): T[]

    /**
     * Добавить элемент массива
     *  при условии отсутствия элемента относительно предиката
     * @param items
     * @param item
     * @param predicate
     */
    function include<T>(items: T[], item: T, predicate?: (item: T) => boolean): T[]

    /**
     * Удалить элемент массива
     *  при условии наличия элемента относительно предиката
     * @param items
     * @param predicate
     */
    function exclude<T>(items: T[], predicate: (item: T) => boolean): T[]

    /**
     * Добавить или удалить элемент массива
     *  при условии наличия или отсутствия относительно предиката
     * @param items
     * @param item
     * @param predicate
     */
    function toggle<T>(items: T[], item: T, predicate: (item: T) => boolean): T[]
  }
}