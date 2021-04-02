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

  math: {
    /**
     * Получить признак принадлежности позиции к ограничевающей форме элемента
     * @param {number} x
     * @param {number} y
     * @param {DOMRect} rect
     * @returns {boolean}
     */
    isBelongToElementRect: (x, y, rect) => x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height,

    /**
     * Получить признак принадлежности позиции к ограничевающей форме элемента с учётом указанного отступа
     * @param {number} x
     * @param {number} y
     * @param {DOMRect} rect
     * @param {number} indent
     * @return {boolean}
     */
    isBelongToElementRectWithIndent: (x, y, rect, indent) => x >= rect.x - indent && x <= rect.x + rect.width + indent && y >= rect.y - indent && y <= rect.y + rect.height + indent,

    /**
     * Получить признак соответствия принадлежности позиции к окружности на плоскости
     * @param {number} x
     * @param {number} y
     * @param {number} areaX
     * @param {number} areaY
     * @param {number} radius
     * @returns {boolean}
     */
    isBelongToCircle: (x, y, areaX, areaY, radius) => CompatUtils.math.pointsDistance(x, y, areaX, areaY) <= radius,

    /**
     * Определить расстояние между точками
     * @param {number} ax
     * @param {number} ay
     * @param {number} bx
     * @param {number} by
     * @returns {number}
     */
    pointsDistance: (ax, ay, bx, by) => Math.hypot(ax - bx, ay - by)
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

  _zIndex: 1,

  /**
   * @returns {number}
   */
  zIndex: () => CompatUtils._zIndex++,

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
window['match'] = (value, contracts) => {
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