import { h, createContext } from 'preact'
import { Lollipop } from "./Lollipop"
import { CompatUtils } from "../../utils/CompatUtils"
import { Environment } from '../../systems/Environment'
import { useState, useContext, useReducer } from "preact/hooks"
import "./Lollipop.scss"

const LollipopContext = createContext(null)

export const LollipopProvider = props => {
  const [zIndex, setZIndex] = useState(null)

  const [state, dispatch] = useReducer((state, action) => {
    setZIndex(Environment.getDepth())

    return match(action.type, {
      "ADD": [...state, {...action.payload}],
      "REMOVE": state.filter(el => el.id !== action.id),
      "_": state
    })
  }, [])

  return(
    <LollipopContext.Provider value={dispatch}>
      <div className={"lollipop-wrapper"} style={{ zIndex }}>
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