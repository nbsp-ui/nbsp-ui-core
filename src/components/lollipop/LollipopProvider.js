import { h } from 'preact'
import { Lollipop } from "./Lollipop"
import { CompatUtils } from "../../utils/CompatUtils"
import { useContext, useReducer } from "preact/hooks"
import { createContext } from "preact/compat"
import "./Lollipop.scss"

const LollipopContext = createContext(null)

export const LollipopProvider = props => {
  const [state, dispatch] = useReducer((state, action) => match(action.type, {
    "ADD": [ ...state, {...action.payload} ],
    "REMOVE": state.filter(el => el.id !== action.id),
    "_": state
  }), [])

  return(
    <LollipopContext.Provider value={dispatch}>
      <div className={"lollipop-wrapper"}>
        {state.map((lollipop) => <Lollipop dispatch={dispatch} key={lollipop.id} {...lollipop} />)}
      </div>
      {props.children}
    </LollipopContext.Provider>
  )
}

export const useLollipop = () => {
  const dispatch = useContext(LollipopContext)

  return (props) => dispatch({ type: "ADD", payload: { id: CompatUtils.uid(), ...props } })
}