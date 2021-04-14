import { useEffect, useRef, useState } from 'preact/hooks'

export const ReactHelper = {
  useReferredState: initialValue => {
    const [state, setState] = useState(initialValue)
    const reference = useRef(state)
    return [state, value => setState(reference.current = value), reference]
  },

  usePatchedState: initialValue => {
    const [state, setState] = useState(initialValue)
    return [state, value => setState({ ...state, ...value })]
  },

  useEffectGlobalEventListener: (event, listener) => useEffect(() => (document.addEventListener(event, listener) || true) && (() => document.removeEventListener(event, listener)), []),

  useRefEventListener: listener => {
    const ref = useRef(listener)
    ref.current = listener
    return ref
  },

  useRefresh: () => {
    const [, setValue] = useState(0)
    return () => setValue(value => value + 1)
  },

  useFirstRender: () => {
    const firstRender = useRef(true)

    useEffect(() => {
      firstRender.current = false
    }, [])

    return firstRender.current
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