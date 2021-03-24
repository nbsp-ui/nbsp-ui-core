import React from 'react'

export const ComponentHelper = {
  /**
   * @param {{}} hook
   * @param {{}} lever
   */
  generateHook: (hook, lever) => hook && Object.assign(hook, lever)
}