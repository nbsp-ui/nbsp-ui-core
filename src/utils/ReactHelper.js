import { useEffect, useRef, useState } from 'preact/hooks'

export const ReactHelper = {
  useReferredState: initial => {
    const [state, setState] = useState(initial)
    const reference = useRef(state)
    return [state, value => setState(reference.current = value), reference]
  },

  usePatchedState: initial => {
    const [state, setState] = useState(initial)
    return [state, value => setState({ ...state, ...value })]
  },

  useDispatchedState: (initial, { at, on } = {}) => {
    const state = useRef(initial)
    const refresh = ReactHelper.useRefresh()

    const apply = (action, data) => state.current = { ...state.current, ...action(state.current, data) }

    at?.forEach(([value, action, data]) => ReactHelper.useDifference(() => apply(action, data), value))

    return [state.current, (action, data) => {
      apply(action, data)
      on?.find(([actions]) => actions.some(each => each === action))[1]?.(state.current)
      refresh()
    }]
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

  useDifference: (callback, value) => {
    const ref = useRef([])
    if (ReactHelper._isChanged(ref.current, value)) {
      ref.current = value
      callback()
    }
  },

  _isChanged: (a, b) => a.length !== b.length || a.some((x, y) => x !== b[y]),

  registerGlobalMouseEventListener: (event, listener) => {
    ReactHelper._registerGlobalEventListener(event, listener)
  },

  _registerGlobalEventListener: (event, listener) => {
    const ref = ReactHelper.useRefEventListener(listener)
    ReactHelper.useEffectGlobalEventListener(event, event => ref.current(event))
  },

  expose: () => console.log('I\'m gonna kick your ass!')
}