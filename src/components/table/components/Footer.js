import { h } from 'preact'
import { HBox } from '../../box-h/HBox'
import { ColumnFooter } from './ColumnFooter'
import './Footer.sass'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {{}[]} items
 * @param {number} footerHeight
 * @returns {*}
 * @constructor
 */
export const Footer = ({ columns, items, footerHeight }) =>
  <HBox className="nbsp-ui-table-footer" height={footerHeight}>
    {
      columns.map((column, index) =>
        <ColumnFooter
          key={index}
          column={column}
          items={items}
        />
      )
    }
  </HBox>