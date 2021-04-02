import React from 'react'

export const ReactHelper = {
  useReferredState: initialValue => {
    const [state, setState] = React.useState(initialValue)
    const reference = React.useRef(state)
    return [state, value => setState(reference.current = value), reference]
  },

  usePatchedState: initialValue => {
    const [state, setState] = React.useState(initialValue)
    return [state, value => setState({ ...state, ...value })]
  },

  useEffectGlobalEventListener: (event, listener) => React.useEffect(() => (document.addEventListener(event, listener) || true) && (() => document.removeEventListener(event, listener)), []),

  useRefEventListener: listener => {
    const ref = React.useRef(listener)
    ref.current = listener
    return ref
  },

  useRefresh: () => {
    const [value, setValue] = React.useState(0)
    return () => setValue(value => value + 1)
  },

  registerGlobalMouseEventListener: (event, listener) => {
    ReactHelper._registerGlobalEventListener(event, listener)
  },

  _registerGlobalEventListener: (event, listener) => {
    const ref = ReactHelper.useRefEventListener(listener)
    ReactHelper.useEffectGlobalEventListener(event, event => ref.current(event))
  },

  expose: () => console.log("I'm gonna kick your ass!")
}