import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import './Loader.scss'

/**
 * @param {LoaderProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Loader = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-loader', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div id={id} className={className} style={style}>
      <div className="profile-main-loader" style={{ width: props.width, height: props.height }}>
        <div className="loader">
          <svg className="circular-loader" viewBox={`${50/2} ${50/2} ${50} ${50}`}>
            <circle
              className="loader-path"
              cx={50}
              cy={50}
              r="20"
              fill="none"
              stroke={props.stroke}
              strokeWidth={props.strokeWidth}
              strokeLinecap={props.strokeLinecap}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

Loader.defaultProps = {
  width: 100,
  height: 100,
  stroke: '#1E88E5',
  strokeWidth: 2,
  strokeLinecap: 'round'
}