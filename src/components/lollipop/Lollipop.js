import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Lollipop.scss'

export const LollipopType = {
  Default: 0,
  Warning: 1,
  Error: 2,
  Success: 3
}

/**
 * @param {LollipopProps} props
 * @returns {*}
 * @constructor
 */
export const Lollipop = props => {
  const { type = LollipopType.Default } = props

  const [dismissed, setDismissed] = useState(false)
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [intervalID, setIntervalID] = useState(0)

  const start = () => {
    const id = setInterval(() => {
      setIndicatorWidth(prev => {
        if (prev < 100) return prev + 0.5
        clearInterval(id)
        return prev
      })
    }, props.duration / 200)

    setIntervalID(id)
  }

  const pause = () => clearInterval(intervalID)

  const dismiss = () => {
    pause()
    setDismissed(true)
    setTimeout(() => props.dispatch({ type: 'REMOVE', id: props.id }), 400)
  }

  const onClick = (e) => {
    props.onClick && props.onClick(e)
    dismiss()
  }

  const onMouseEnter = (e) => {
    pause()
    props.onMouseEnter && props.onMouseEnter(e)
  }

  const onMouseLeave = (e) => {
    !props.indefinite && start()
    props.onMouseLeave && props.onMouseLeave(e)
  }

  useEffect(() => indicatorWidth === 100 && dismiss(), [indicatorWidth])
  useEffect(() => !props.indefinite && start(), [])

  const className = ComponentHelper.composeClass(
    'nbsp-ui-lollipop',
    dismissed && 'nbsp-ui-lollipop-dismissed',
    props.indefinite && 'nbsp-ui-lollipop-indefinite',
    type === LollipopType.Default && 'nbsp-ui-lollipop-default',
    type === LollipopType.Warning && 'nbsp-ui-lollipop-warning',
    type === LollipopType.Error && 'nbsp-ui-lollipop-error',
    type === LollipopType.Success && 'nbsp-ui-lollipop-success',
    props.className
  )
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {props.title && <div><span>{props.title}</span></div>}
      {props.description && <div><p>{props.description}</p></div>}
      {props.indicated && <div style={props.indefinite ? {} : { width: `${indicatorWidth}%` }}/>}
    </div>
  )
}

Lollipop.defaultProps = {
  duration: 4000
}