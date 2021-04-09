import { h } from 'preact'
import { ComponentHelper } from "../../utils/ComponentHelper"
import './Image.scss'

/**
 * @param {ImageProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Image = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-image', props.className)
  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      id={id}
      className={className}
      style={style}
      onClick={props.onClick}
    >
      <img
        src={props.src}
        srcSet={props.srcSet}
        sizes={props.sizes}
        alt={props.alt}
        width={props.width}
        height={props.height}
        onError={props.onError}
      />
    </div>
  )
}

Image.defaultProps = {
  alt: ''
}