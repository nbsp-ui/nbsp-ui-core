export const CompatUtils = {

  string: {
    /**
     * @param {string} string
     * @param {string} substring
     */
    remove: (string, substring) => string.replace(substring, ''),

    /**
     * @param {string} string
     * @param {string} substring
     * @param {string} separator
     */
    append: (string, substring, separator = ' ') => string.concat(separator).concat(substring)
  },

  /**
   * @param {HTMLElement} element
   * @param {string} names
   */
  remove_classes: (element, ...names) => element?.classList.remove(...names),

  _uid: 0,

  /**
   * @return {string}
   */
  uid: () => String(CompatUtils._uid++),

  /**
   * @param {string} id
   * @return {HTMLElement}
   */
  $$: id => window.document.getElementById(id),

  /**
   * @param {number} from
   * @param {number} to
   * @returns {number[]}
   */
  range: (from, to) => Array(to - from + 1).fill(0).map((value, index) => value + from + index)
}

/**
 * Реализация сопоставления в базовом соответствии* с конструкцией "match" языка программирования Rust
 * Оформление соответствия диапазону значений пересмотрено
 * {@link https://doc.rust-lang.org/rust-by-example/flow_control/match.html}
 * @param {*} value - Сопоставляемое значение
 * @param {{}} contracts - Контракты сопоставления
 * @returns {*}
 */
window.match = (value, contracts) => {
  value = String(value)

  // Исключение неопрделенного порядка свойств
  const keys = Object.keys(contracts).sort((a) => a.includes('..') || a.includes('|') ? -1 : 1)

  for (let contract of keys) {
    // Соответствие значению
    if (contract === value) return contracts[contract]

    // Соответствие любому значению
    if (String(contract) === '_') return contracts[contract]

    // Соответствие множеству
    if (String(contract).includes('|') && contract.split('|').map(value => value.trim()).includes(value)) return contracts[contract]

    // Соответствие диапазону (без "=", x in a..b | a.. | ..b, a <= x <= b)
    if (String(contract).includes('..')) {
      const values = contract.split('..')
      if (
        (values.length === 1
          && (
            (contract.endsWith('..') && Number(values[0]) <= Number(value))
            || (contract.startsWith('..') && Number(value) <= Number(values[0]))
          )
        ) || (values.length === 2
          && (Number(values[0]) <= Number(value) && Number(value) <= Number(values[1]))
        )
      ) return contracts[contract]
    }
  }
}