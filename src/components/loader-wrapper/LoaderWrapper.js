import React from 'react'
import { Loader } from '../loader/Loader'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './LoaderWrapper.scss'

/**
 * @param {LoaderWrapperProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const LoaderWrapper = props => {
  const className = ComponentHelper.composeClass('nbsp-ui-loader-wrapper', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    props.active
      ?
      <div className={className} style={style}>
        {props.children}
        <div className='overlay'/>
        <Loader size={props.size}/>
      </div>
      :
      <div>{props.children}</div>
  )
}
