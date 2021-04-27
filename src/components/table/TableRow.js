import { h } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { HBox } from '../box-h/HBox'
import {ComponentHelper} from "../../utils/ComponentHelper";

/**
 * @param {TableColumn[]} columns
 * @param {TableItem | {}} item
 * @param {function(item: TableItem): void} onItemClick
 * @returns {*}
 * @constructor
 */
export const TableRow = ({ columns, item, onItemClick }) =>
  <HBox
    className={ComponentHelper.composeClass('row', { use: 'row-selected', if: item._selected })}
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