import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import { CompatAlign } from "../../utils/CompatAlign"
import './Progress.scss'
import { Box } from "../box/Box"

/**
 * @param {ProgressProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Progress = props => {
  const { 
    id,
    radius = 100,
    progress = 0,
    steps = 100,
    cut = 0
  } = props

  const className = ComponentHelper.composeClass('nbsp-ui-progress', props.className)
  const style = ComponentHelper.composeStyle(props)

  const [animationInited, setAnimationInited] = React.useState(false)

  React.useEffect(() => {
    props.initialAnimation && setTimeout(() => setAnimationInited(true), props.initialAnimationDelay)
  }, [])

  const getProgress = () => props.initialAnimation && !animationInited ? 0 : progress

  const getStrokeDashoffset = (strokeLength) => {
    const progress = getProgress()
    const progressLength = (strokeLength / steps) * (steps - progress)

    if(props.inverse) {
      return props.counterClockwise ? 0 : progressLength - strokeLength
    }

    return props.counterClockwise ? -1 * progressLength : progressLength
  }

  const getStrokeDashArray = (strokeLength, circumference) => {
    const progress = getProgress()
    const progressLength = (strokeLength / steps) * (steps - progress)

    if(props.inverse) {
      return `${progressLength}, ${circumference}`
    }

    return props.counterClockwise
      ? `${strokeLength * (progress / 100)}, ${circumference}`
      : `${strokeLength}, ${circumference}`
  }

  const getTrackStrokeDashArray = (strokeLength, circumference) => {

    if(props.initialAnimation && !animationInited) {
      return `0, ${circumference}`
    }

    return `${strokeLength}, ${circumference}`
  }

  const getExtendedWidth = () => props.strokeWidth > props.trackStrokeWidth ? props.strokeWidth * 2 : props.trackStrokeWidth * 2

  const d = 2 * radius
  const width = d + getExtendedWidth()

  const circumference = 2 * Math.PI * radius
  const strokeLength = (circumference / 360) * (360 - cut)

  return (
    <div id={id} className={className} style={{ width, height: width, ...style }} data-progress={ props.valueDisplay ? progress : ''}>
      <svg
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${width}`}
        style={{ transform: `rotate(${props.rotate}deg)`, position: 'absolute' }}
      >
        {
          props.trackStrokeWidth > 0 && (
            <circle
              cx={width / 2}
              cy={width / 2}
              r={radius}
              fill="none"
              stroke={props.trackStrokeColor}
              strokeWidth={props.trackStrokeWidth}
              strokeDasharray={getTrackStrokeDashArray(strokeLength, circumference)}
              strokeLinecap={props.trackStrokeLinecap}
              style={{ transition: props.trackTransition }}
          />
          )
        }
        {
          props.strokeWidth > 0 && (
            <circle
              cx={width / 2}
              cy={width / 2}
              r={radius}
              fill={props.fillColor}
              stroke={props.strokeColor}
              strokeWidth={props.strokeWidth}
              strokeDasharray={getStrokeDashArray(strokeLength, circumference)}
              strokeDashoffset={getStrokeDashoffset(strokeLength)}
              strokeLinecap={props.strokeLinecap}
              style={{ transition: props.transition }}
            />)
        }
      </svg>
    </div>
  )
}

Progress.defaultProps = {
  radius: 100,
  progress: 0,
  steps: 100,
  cut: 0,
  rotate: -90,

  strokeWidth: 10,
  strokeColor: '#1E88E5',
  fillColor: 'none',
  strokeLinecap: 'round',
  transition: '.3s ease',

  trackStrokeColor: '#E3F2FD',
  trackStrokeWidth: 10,
  trackStrokeLinecap: 'round',
  trackTransition: '.3s ease',

  counterClockwise: false,
  inverse: false,

  initialAnimation: false,
  initialAnimationDelay: 0,

  valueSize: '12pt'
}