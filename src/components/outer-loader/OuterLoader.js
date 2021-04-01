import React from 'react'
import { Loader } from "../loader/Loader"
import { ComponentHelper } from "../../utils/ComponentHelper"
import './OuterLoader.scss'

/**
 * @param {OuterLoaderProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const OuterLoader = props => {

  const className = ComponentHelper.composeClass('nbsp-ui-outer-loader', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    props.turn
      ?
        <div className={className} style={{ position: 'relative', ...style}}>
          <div className={'lay'}/>
          <div className={'loader'} style={{ left: `${props.loaderWidth || 100}px` }}>
            <Loader width={props.loaderWidth || 100} />
          </div>
          { props.children }
        </div>
      :
        <div>{props.children}</div>
  )
}
