import { h } from 'preact'

/**
 * @param {SpacerProps} props
 * @returns {JSX.Element}
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