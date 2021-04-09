import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { CompatAlign } from '../../utils/CompatAlign'
import { Box } from '../box/Box'
import './Lollipop.scss'
import { CompatUtils } from '../..'

export const LollipopType = {
  Default: 0,
  Warning: 1,
  Error: 2,
  Success: 3
}

/**
 * @param {LollipopProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Lollipop = props => {
  const { id = CompatUtils.uid(), type = LollipopType.Default } = props

  const className = ComponentHelper.composeClass(
    'nbsp-ui-lollipop',
    { use: 'nbsp-ui-lollipop-default', if: type === LollipopType.Default },
    { use: 'nbsp-ui-lollipop-warning', if: type === LollipopType.Warning },
    { use: 'nbsp-ui-lollipop-error', if: type === LollipopType.Error },
    { use: 'nbsp-ui-lollipop-success', if: type === LollipopType.Success },
    props.className
  )
  const style = ComponentHelper.composeStyle(props)

  return (
    <div className={className} style={{ ...style, animationDuration: props.duration }} onClick={() => {
      lollipops.splice(lollipops.indexOf(lollipops.find(l => l.id === id)))
      setLollipops([])
    }}>
      {props.title && <Box vAlign={CompatAlign.Center}>
        <span>{props.title}</span>
      </Box>}
      {props.description && <div>
        <p>{props.description}</p>
      </div>}
    </div>
  )
}

Lollipop.defaultProps = {
  duration: '.5s'
}

/**
 * @param {LollipopContainerProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const LollipopContainer = props => {

  const className = ComponentHelper.composeClass(
    'nbsp-ui-lollipop-container',
    props.className
  )
  const style = ComponentHelper.composeStyle(props)

  return (
    <Box vertical className={className} style={{ ...style }} onClick={() => {
    }}>
      {props.lollipops.map(lollipop => <Lollipop {...lollipop}/>)}
    </Box>
  )
}

/**
 * @param {LollipopContainerProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const LollipopManager = props => {

  const lollipops = [
    { id: '5437', title: 'Test 1', description: 'Desc 1', duration: '5s' },
    { id: '5438', title: 'Test 2', description: 'Desc 2', duration: '5s' },
    { id: '5439', title: 'Test 3', description: 'Desc 3', duration: '5s' },
    { id: '5440', title: 'Test 4', description: 'Desc 4', duration: '5s' },
    { id: '5441', title: 'Test 5', description: 'Desc 5', duration: '5s' }
  ]

  return (
    <Box className={className} style={{ ...style }} onClick={props.onClick}>
      {lollipops.map(item => <Lollipop {...item}/>)}
    </Box>
  )
}