import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './Menu.sass'

const composeOffset = selection => ({
  transform: `translateX(${selection * 100}%)`
})

/**
 * @param props
 * @param {boolean} props.expanded
 * @param {Page[]} props.pages
 * @param {number} props.selection
 * @param {Function} props.onSelectionChange
 * @returns {*}
 * @constructor
 */
export const Menu = ({ expanded, pages, selection, onSelectionChange }) => {
  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-menu',
    { use: 'nbsp-ui-pw-menu-expanded', if: expanded }
  )

  return (
    <div className={className}>
      <div
        className="👆"
        style={{
          ...composeOffset(selection)
        }}
      >
        <div/>
        <div/>
      </div>
      <div className="🌶">
        {pages.map((page, index) => (
          <div
            onClick={() => onSelectionChange(index)}
          >
            {page.icon}
          </div>
        ))}
      </div>
    </div>
  )
}