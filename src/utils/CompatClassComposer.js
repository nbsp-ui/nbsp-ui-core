export const CompatClassComposer = {
  /**
   * @typedef CompatClassComposerProperty
   * @property {string} use
   * @property {*} if
   * @param properties
   */

  /**
   * @param {string | CompatClassComposerProperty | (string | CompatClassComposerProperty)[]} properties
   */
  append: (...properties) => properties.map(property => !property || typeof property === 'string' ? property : property.if && property.use).filter(value => value).join(' ')
}