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
 * @returns {JSX.Element}
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
            stroke={props.color}
            strokeWidth={props.strokeWidth}
            strokeLinecap={props.strokeLinecap}
          />
        </svg>
      </div>
    </div>
  )
}

Loader.defaultProps = {
  size: 24,
  color: '#1E88E5',
  strokeWidth: 2,
  strokeLinecap: 'round'
}