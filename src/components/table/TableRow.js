import { h } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { HBox } from '../box-h/HBox'

/**
 * @param {TableColumn[]} columns
 * @param {TableItem | {}} item
 * @param {function(item: TableItem): void} onItemClick
 * @returns {*}
 * @constructor
 */
export const TableRow = ({ columns, item, onItemClick }) =>
  <HBox
    className={ComponentHelper.composeClass('row', item._selected && 'row-selected')}
    onClick={() => onItemClick(item)}
  >
    {
      columns.map(({ cell, width }, index) =>
        <HBox
          key={index}
          vAlign={CompatAlign.Center}
          width={width}
        >{cell(item)}</HBox>
      )
    }
  </HBox>