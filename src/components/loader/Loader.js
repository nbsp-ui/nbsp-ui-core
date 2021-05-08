import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import './Loader.scss'

const mappers = {
  'size': ({ size }) => ({
    ...size && {
      width: `${size}px`,
      maxWidth: `${size}px`,
      height: `${size}px`,
      maxHeight: `${size}px`
    },
    flexBasis: size ? 'auto' : 0
  })
}

/**
 * @param {LoaderProps} props
 * @returns {*}
 * @constructor
 */
export const Loader = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-loader', props.className)

  const style = ComponentHelper.composeStyle(props, mappers)

  return (
    <div id={id} className={className} style={style}>
      <div className="loader">
        <svg className="circular-loader" viewBox={`${50 / 2} ${50 / 2} ${50} ${50}`}>
          <circle
            className="loader-path"
            cx={50}
            cy={50}
            r="20"
            fill="none"
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
            style={{ ...(props.color && { stroke: props.color }) }}
          />
        </svg>
      </div>
    </div>
  )
}

Loader.defaultProps = {
  size: 24,
  strokeWidth: 2,
  strokeLinecap: 'round'
}