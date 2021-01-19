export const CompatAnimation = {
  /**
   * @param {HTMLElement} element
   * @param {string} animation
   */
  add: (element, animation) => element?.classList.add(animation),

  /**
   * @param {HTMLElement} element
   * @param {string} animation
   */
  remove: (element, animation) => element?.classList.remove(animation)
}