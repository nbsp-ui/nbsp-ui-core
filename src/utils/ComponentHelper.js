import React from 'react'

export const ComponentHelper = {
  /**
   * @typedef ClassContract
   * @property {string} use
   * @property {*} if
   * @param properties
   */

  /**
   * @param {string | ClassContract | (string | ClassContract)[]} properties
   */
  composeClass: (...properties) => properties.map(property => !property || typeof property === 'string' ? property : property.if && property.use).filter(value => value).join(' '),

  /**
   * @param {{}} hook
   * @param {{}} lever
   */
  generateHook: (hook, lever) => hook && Object.assign(hook, lever)
}