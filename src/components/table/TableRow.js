import { h } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { HBox } from '../box-h/HBox'

/**
 * @param {TableColumn[]} columns
 * @param {{}} item
 * @returns {*}
 * @constructor
 */
export const TableRow = ({ columns, item }) =>
  <HBox>
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