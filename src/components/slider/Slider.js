import { h } from 'preact'
import { useRef, useState } from "preact/hooks"
import { ComponentHelper } from '../../utils/ComponentHelper'
import { CompatUtils } from "../.."
import './Slider.scss'

// noinspection JSValidateJSDoc
/** TODO SIMPLIFY!
 * @param {SliderProps} props
 * @returns {*}
 * @constructor
 */
export const Slider = props => {
  const { id = CompatUtils.uid() } = props

  const className = ComponentHelper.composeClass('nbsp-ui-slider', props.className)
  const style = ComponentHelper.composeStyle(props)

  const getPercentByValue = value => value / props.max * 100
  const getPercentByMetrics = metrics => metrics / props.width * 100

  const thumbPrimary = useRef()
  const thumbSecondary = useRef()
  const thumbPrimaryId = CompatUtils.uid()
  const thumbSecondaryId = CompatUtils.uid()
  const deltaPrimary = useRef(0)
  const deltaSecondary = useRef(0)

  const [trackParameters, setTrackParameters] = useState({
    width: props.range ? Math.abs(getPercentByValue(props.values[0]) - getPercentByValue(props.values[1]))  : getPercentByValue(props.values[0]),
    left: props.range ? Math.min(getPercentByValue(props.values[0]), getPercentByValue(props.values[1])) : 0
  })

  const getThumbLeft = thumb => thumb.current.style.left.slice(0, -1)
  const setThumbLeft = (percent, thumb) => thumb.current.style.left = `${percent}%`

  const setThumb = (transference, thumb) => {
    setThumbLeft(transference, thumb)
    setTrackParameters({
      width: props.range ? Math.abs(getThumbLeft(thumbPrimary) - getThumbLeft(thumbSecondary)) : transference,
      left: props.range ? Math.min(getThumbLeft(thumbPrimary), getThumbLeft(thumbSecondary)) : 0
    })
    match(thumb.current.id, {
      [thumbPrimary.current.id]: () => props.onChange && props.onChange(transference / 100 * props.max),
      [thumbSecondary?.current?.id]: () => props.onSecondChange && props.onSecondChange(transference / 100 * props.max)
    })()
  }

  const calcStepTransference = (leftPercent) => {
    const stepPercent = props.step && getPercentByValue(props.step)
    return Math.round(leftPercent / stepPercent) * stepPercent
  }

  const moveThumb = (left, metric, thumb) => {
    const leftPercent = match(metric, { 'px': getPercentByMetrics(left), '%': left })
    const transference = props.step ? calcStepTransference(leftPercent) : leftPercent

    setThumb(transference, thumb)
  }

  const calcLeft = (e, delta) => match(true, {
    [e.clientX - delta.current <= props.width]: e.clientX - delta.current,
    [e.clientX - delta.current > props.width]: props.width,
    [e.clientX - delta.current < 0]: 0
  })

  const mouseMovePrimary = (e) => moveThumb(calcLeft(e, deltaPrimary), 'px', thumbPrimary)
  const mouseMoveSecondary = (e) => moveThumb(calcLeft(e, deltaSecondary), 'px', thumbSecondary)

  return (
    <div id={id} className={className} style={style}>
      <div className="rail"> </div>
      <div className="track" style={{ left: `${trackParameters.left}%`, width: `${trackParameters.width}%` }}> </div>
      {
        props.dots
        &&
        <div className="dot-group">
          {
            props.dots.map(
              dot =>
                <span
                  className={ComponentHelper.composeClass('dot', {
                    use: 'dot-active',
                    if: props.range
                      ? dot > Math.min(props.values[0], props.values[1]) && dot < Math.max(props.values[0], props.values[1])
                      : props.values[0] > dot
                  })}
                  style={{ left: `${getPercentByValue(dot)}%` }}
                  onClick={() => setThumb(getPercentByValue(dot), thumbPrimary)} // TODO Hm
                >
                </span>
            )
          }
        </div>
      }
      <div
        className="thumb"
        role="slider"
        id={thumbPrimaryId}
        ref={thumbPrimary}
        aria-valuemin={props.min}
        aria-valuemax={props.max}
        aria-valuenow={props.values[0]}
        aria-disabled="false"
        style={{ left: `${getPercentByValue(props.values[0])}%` }}
        onMouseDown={(e) => {
          deltaPrimary.current = e.clientX - thumbPrimary.current.offsetLeft

          document.addEventListener('mousemove', mouseMovePrimary)
          document.addEventListener('mouseup', () => document.removeEventListener('mousemove', mouseMovePrimary))
        }}
      >
      </div>
      {
        props.range
        &&
        <div
          className="thumb"
          role="slider"
          id={thumbSecondaryId}
          ref={thumbSecondary}
          aria-valuemin={props.min}
          aria-valuemax={props.max}
          aria-valuenow={props.values[1]}
          aria-disabled="false"
          style={{ left: `${getPercentByValue(props.values[1])}%` }}
          onMouseDown={(e) => {
            deltaSecondary.current = e.clientX - thumbSecondary.current.offsetLeft

            document.addEventListener('mousemove', mouseMoveSecondary)
            document.addEventListener('mouseup', () => document.removeEventListener('mousemove', mouseMoveSecondary))
          }}
        >
        </div>
      }
      {
        props.marks
        &&
        <div className="mark-group">
          {
            props.marks.map(mark =>
              <span className="mark" style={{ left: `${getPercentByValue(mark)}%` }}>
                {mark}
              </span>
            )
          }
        </div>
      }
    </div>
  )
}

Slider.defaultProps = {
  max: 100,
  min: 0,
  step: 1,
  values: [50]
}