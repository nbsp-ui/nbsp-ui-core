import { h } from 'preact'
import { useState, useEffect } from "preact/hooks"
import { ComponentHelper } from '../../utils/ComponentHelper'
import { CompatAlign } from '../../utils/CompatAlign'
import { Box } from '../..'
import './Lollipop.scss'

export const LollipopType = {
  Default: 0,
  Warning: 1,
  Error: 2,
  Success: 3
}

/**
 * @param {LollipopProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Lollipop = props => {
  const { type = LollipopType.Default } = props

  const [dismissed, setDismissed] = useState(false)
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [intervalID, setIntervalID] = useState(null)

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
    setTimeout(() => props.dispatch({ type: "REMOVE", id: props.id }), 400)
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
    { use: 'nbsp-ui-lollipop-dismissed', if: dismissed },
    { use: 'nbsp-ui-lollipop-indefinite', if: props.indefinite },
    { use: 'nbsp-ui-lollipop-default', if: type === LollipopType.Default },
    { use: 'nbsp-ui-lollipop-warning', if: type === LollipopType.Warning },
    { use: 'nbsp-ui-lollipop-error', if: type === LollipopType.Error },
    { use: 'nbsp-ui-lollipop-success', if: type === LollipopType.Success },
    props.className
  )
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {props.title && <Box vAlign={CompatAlign.Center}><span>{props.title}</span></Box>}
      {props.description && <div><p>{props.description}</p></div>}
      {props.indicated && <div style={props.indefinite ? {} : { width: `${indicatorWidth}%` }} />}
    </div>
  )
}

Lollipop.defaultProps = {
  duration: 4000
}