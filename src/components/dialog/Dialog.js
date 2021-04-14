import { h } from 'preact'
import { useEffect } from "preact/hooks"
import { ComponentHelper } from '../../utils/ComponentHelper'
import { CompatUtils } from "../.."
import { ReactHelper } from "../../utils/ReactHelper"
import './Dialog.scss'

/**
 * @param {DialogProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Dialog = props => {
  const { id = CompatUtils.uid() } = props

  const firstRender = ReactHelper.useFirstRender()

  useEffect(() => {
    !firstRender && (props.opened ? props.onOpen() : props.onClose())
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
      zIndex: CompatUtils.zIndex()
    }}>
      <div className={'overlay'} onClick={props.onOverlayClick}> </div>
      <div className={'content'} style={{ width: props.width, height: props.height }}>{props.children}</div>
    </div>
  )
}

Dialog.defaultProps = {
  width: '25%',
  height: '25%'
}