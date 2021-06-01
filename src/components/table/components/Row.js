import { h } from 'preact'
import { CompatAlign } from '../../../utils/CompatAlign'
import { ComponentHelper } from '../../../utils/ComponentHelper'
import { HBox } from '../../box-h/HBox'

/**
 * @param {TableColumn[]} columns
 * @param {{}} item
 * @param {{}} selection
 * @param {number} rowHeight
 * @param {function(item: {}): void} onItemClick
 * @returns {*}
 * @constructor
 */
export const Row = ({ columns, item, selection, rowHeight, onItemClick }) => {
  const className = ComponentHelper.composeClass(
    'row',
    selection[item._id] && 'row-selected'
  )

  return <div
    className={className}
    onClick={() => onItemClick(item)}
    style={{ height: rowHeight }}
  >
    {
      columns.map(({ cell, width }) => (
          <HBox
            vAlign={CompatAlign.Center}
            width={width}
          >{cell(item)}</HBox>
        )
      )
    }
  </div>
}