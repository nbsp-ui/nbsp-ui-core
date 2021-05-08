import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Environment } from '../../systems/Environment'
import { CompatUtils } from '../../utils/CompatUtils'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import './Dialog.scss'

/**
 * @param {DialogProps} props
 * @returns {*}
 * @constructor
 */
export const Dialog = props => {
  const { id = CompatUtils.uid() } = props

  const firstRender = ReactHelper.useFirstRender()

  useEffect(() => {
    !firstRender && (props.opened ? props.onOpen && props.onOpen() : props.onClose && props.onClose())
  }, [props.opened])

  const className = ComponentHelper.composeClass('nbsp-ui-dialog', props.className)

  const style = ComponentHelper.composeStyle(props)

  document.body.style.overflow = props.opened ? 'hidden' : 'auto'

  return (
    <div id={id} className={className} style={{
      ...style,
      height: '100vh',
      maxHeight: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      display: props.opened ? 'block' : 'none',
      zIndex: Environment.getDepth()
    }}>
      <div className={'overlay'} onClick={props.onOverlayClick}/>
      <div className={'content'} style={{ width: props.width, height: props.height }}>{props.children}</div>
    </div>
  )
}

Dialog.defaultProps = {
  width: '25%',
  height: '25%'
}