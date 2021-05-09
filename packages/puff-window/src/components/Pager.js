import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './Pager.sass'

const composeOffset = selection => ({
  transform: `translateX(-${selection * 100}%)`
})

/**
 * @param props
 * @param {boolean} props.expanded
 * @param {number} props.selection
 * @param {Page[]} props.pages
 * @returns {*}
 * @constructor
 */
export const Pager = ({ expanded, selection, pages }) => {
  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-pager',
    { use: 'nbsp-ui-pw-pager-expanded', if: expanded }
  )

  return (
    <div className={className}>
      <div
        className="🌶"
        style={{
          ...composeOffset(selection)
        }}
      >
        {pages.map(page => (
          <div>
            {page.content}
          </div>
        ))}
      </div>
    </div>
  )
}