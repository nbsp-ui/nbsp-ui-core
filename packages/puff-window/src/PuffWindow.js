import { ComponentHelper, ReactHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import { useRef } from 'preact/hooks'
import { Bar } from './components/Bar'
import './PuffWindow.sass'

const Orientations = {
  Custom: 0,
  Max: 1,
  Min: 2
}

/**
 * @param {PuffWindowProps} props
 * @returns {*}
 * @constructor
 */
export const PuffWindow = props => {
  const { width, height, title, icon, pages } = props

  const [{ closed, orientation }, patch] = ReactHelper.usePatchedState({
    closed: false,
    orientation: Orientations.Custom
  })

  const element = useRef()
  const movementDeltaX = useRef(0)
  const movementDeltaY = useRef(0)

  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw',
    closed && 'nbsp-ui-pw-closed'
  )

  const style = {
    width: `${match(orientation, {
      [Orientations.Custom]: width,
      [Orientations.Max]: element.current?.parentElement.getBoundingClientRect().width,
      [Orientations.Min]: element.current?.parentElement.getBoundingClientRect().width / 2
    })}px`,
    height: `${match(orientation, {
      [Orientations.Custom]: height,
      [Orientations.Max]: element.current?.parentElement.getBoundingClientRect().height,
      [Orientations.Min]: element.current?.parentElement.getBoundingClientRect().height / 2
    })}px`,
    left: `${match(orientation, {
      [Orientations.Max]: 0
    })}`,
    top: `${match(orientation, {
      [Orientations.Max]: 0
    })}px`
  }

  const handleMouseDown = event => {
    movementDeltaX.current = event.clientX - element.current.getBoundingClientRect().x
    movementDeltaY.current = event.clientY - element.current.getBoundingClientRect().y

    const handleMouseMove = event => {
      element.current.style.left = `${event.clientX - movementDeltaX.current}px`
      element.current.style.top = `${event.clientY - movementDeltaY.current}px`
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const nextOrientation = () => Object.values(Orientations)[orientation + 1] || 0

  return (
    <div
      ref={element}
      className={className}
      style={style}
    >
      <Bar
        title={title}
        icon={icon}
        pages={pages}
        onMouseDown={handleMouseDown}
        onCloseClick={() => {
          patch({
            closed: true
          })
          props.onClose?.()
        }}
        onOrientClick={() => {
          patch({
            orientation: nextOrientation()
          })
          props.onOrient?.()
        }}
      />
      <div className="content">

      </div>
    </div>
  )
}

PuffWindow.defaultProps = {
  width: 800,
  height: 600
}