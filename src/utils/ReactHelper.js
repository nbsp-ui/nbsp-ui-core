import React from 'react'

export const ReactHelper = {
  useReferredState: initialValue => {
    const [state, setState] = React.useState(initialValue)
    const reference = React.useRef(state)
    return [state, value => setState(reference.current = value), reference]
  }
}