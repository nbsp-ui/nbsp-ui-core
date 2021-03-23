import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Tag.scss'

/**
 * @param {TagProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Tag = props => {
    const { value, closeButton, onCloseClick } = props

    const className = CompatClassComposer.append('nbsp-ui-tag', props.className)
    const style = CompatStyleComposer.compose(props)

    return (
      <div className={className} style={style}>
        <span style={{display: 'inline-block'}}>{ value }</span>
        {
          closeButton &&
          <div style={{display: 'inline-block', margin: '0 0 0 4px'}} onClick={onCloseClick}>
            <i className="fas fa-times"/>
          </div>
        }
      </div>
    )
}