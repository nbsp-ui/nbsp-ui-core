import { h } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { HBox } from '../box-h/HBox'

/**
 * @param props
 * @param {TableColumn} props.column
 * @param {{}[]} props.items
 * @returns {*}
 * @constructor
 */
export const TableColumnFooter = ({ column, items }) =>
  <HBox
    vAlign={CompatAlign.Center}
    width={column.width}
  >
    {column.footer && column.footer(items)}
  </HBox>