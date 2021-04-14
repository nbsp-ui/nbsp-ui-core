import { h } from 'preact'
import './PivotTableContainerItem.scss'
import { useState } from 'preact/hooks'
import { SVGIcon } from '../icon-svg/SVGIcon'
import ChevronUp from '../../icons/chevron-up.svg'
import ChevronDown from '../../icons/chevron-down.svg'

/**
 * @param props
 * @param {PivotTableContainerUnit} props.unit
 * @param {PivotTableRowField[]} props.rows
 * @param {PivotTableColumnField[]} props.columns
 * @param {number} props.level
 * @return {*}
 * @constructor
 */
export const PivotTableContainerItem = ({ unit, rows, columns, level = 0 }) => {
  const [opened, setOpened] = useState(unit.opened)

  return (
    <div className="nbsp-ui-pivot-table-container-item">
      <div className="row">
        <div className="base-cell">
          {Array(level).fill().map(() => (
            <div className="offset">
              <div/>
            </div>
          ))}
          {unit.children ? (
            <div className="opener"
                 onClick={() => setOpened(!opened)}
            >
              <SVGIcon icon={opened ? <ChevronUp/> : <ChevronDown/>}/>
            </div>
          ) : (
            <div className="opener-replacement">
              <div/>
            </div>
          )}
          <div className="content">
            <p>{unit.value}</p>
          </div>
        </div>
        {columns.map(column => (
          <div className="cell">
            <p>{unit.aggregations[column.key]}</p>
          </div>
        ))}
      </div>
      {opened && unit.children && (
        <div className="children">
          {unit.children.map(child => (
            <PivotTableContainerItem
              unit={child}
              rows={rows}
              columns={columns}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}