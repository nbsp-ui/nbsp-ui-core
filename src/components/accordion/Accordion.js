import { h } from 'preact'
import { useState } from 'preact/hooks'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { Box } from '../box/Box'
import { FAIcon } from '../icon-fa/FAIcon'
import { CompatAlign } from '../../utils/CompatAlign'
import './Accordion.scss'

/**
 * @param {AccordionProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Accordion = props => {
  const { id, header } = props

  const [collapsed, setCollapsed] = useState(props.collapsed)
  const headerClick = () => {
    setCollapsed(!collapsed)
    props.onChange && props.onChange(collapsed)
  }

  const className = ComponentHelper.composeClass('nbsp-ui-accordion', props.className)
  const style = ComponentHelper.composeStyle(props, props.style)

  return (
    <div id={id} className={className} style={style}>
      <Box
        className={ComponentHelper.composeClass('header', { use: 'header-collapsed', if: collapsed })}
        vAlign={CompatAlign.Center}
        onClick={() => headerClick()}
      >
        <FAIcon className={'icon'} icon={'fas fa-chevron-right'}/>
        <span>{header}</span>
      </Box>
      <div
        className={ComponentHelper.composeClass('content', { use: 'content-collapsed', if: collapsed })}
        style={{ height: collapsed ? 0 : props.contentHeight }}
      >
        {props.children}
      </div>
    </div>
  )
}

Accordion.defaultProps = {
  contentHeight: '400px'
}