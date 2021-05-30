import { h } from 'preact'
import { HBox } from '../../box-h/HBox'
import './Container.sass'
import { Row } from './Row'

/**
 * @param props
 * @param {TableColumn[]} columns
 * @param {{}[]} items
 * @param {{}} selection
 * @param {number} rowHeight
 * @param {function(item: {}): void} onItemClick
 * @returns {*}
 * @constructor
 */
export const Container = ({ columns, items, selection, rowHeight, onItemClick }) =>
  <HBox className="nbsp-ui-table-container" vertical>
    {
      items.map((item, index) =>(
        <Row
          key={index}
          columns={columns}
          item={item}
          selection={selection}
          rowHeight={rowHeight}
          onItemClick={onItemClick}
        />
      ))
    }
  </HBox>