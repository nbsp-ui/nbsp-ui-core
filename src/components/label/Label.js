import React from 'react'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Label.scss'

/**
 * @param {LabelProps} state
 * @param {function} setState
 * @return {LabelLever}
 */
const toLever = (state, setState) => ({
  define: (key, value) => state[key] = value,
  refresh: () => setState(state),
  setValue: value => setState(state = { ...state, value }),
  getValue: () => state.value,
  setColor: color => setState(state = { ...state, color }),
  getColor: () => state.color
})

/**
 * @param {LabelProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Label = props => {
  const [state, setState] = React.useState(props)

  const className = ComponentHelper.composeClass('nbsp-ui-label', props.className)
  const style = ComponentHelper.composeStyle(state)

  React.useEffect(() => ComponentHelper.generateHook(props.hook, toLever(state, setState)), [])

  return (
    <div className={className}>
      <span style={style}>
        {state.value}
      </span>
    </div>
  )
}