import React from 'react'

/**
 * @param {SpacerProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Spacer = props => {
  const { vertical, size = 8 } = props

  return (
    <div className='nbsp-ui-spacer' style={{
      ...(vertical ? {
        width: '100%',
        height: `${size}px`
      } : {
        width: `${size}px`,
        height: '100%'
      })
    }}/>
  )
}