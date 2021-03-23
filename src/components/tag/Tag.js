import React from 'react'
import { CompatClassComposer } from '../../utils/CompatClassComposer'
import { CompatStyleComposer } from '../../utils/CompatStyleComposer'
import './Tag.scss'

export const CompatTagType = {
  DEFAULT: 0,
  WARNING: 1,
  ERROR: 2,
  SUCCESS: 3,
  PROCESSING: 4
}

/**
 * @param {TagProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Tag = props => {
    const { type, value, closeButton, onCloseClick } = props

    const className = CompatClassComposer.append(
      'nbsp-ui-tag',
      { use: 'nbsp-ui-tag-default', if: type === CompatTagType.DEFAULT },
      { use: 'nbsp-ui-tag-warning', if: type === CompatTagType.WARNING },
      { use: 'nbsp-ui-tag-error', if: type === CompatTagType.ERROR },
      { use: 'nbsp-ui-tag-success', if: type === CompatTagType.SUCCESS },
      { use: 'nbsp-ui-tag-processing', if: type === CompatTagType.PROCESSING },
      props.className
    )
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