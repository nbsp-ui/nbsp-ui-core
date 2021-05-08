import { h } from 'preact'
import { useRef } from 'preact/hooks'
import ChevronLeft from '../../icons/chevron-left.svg'
import ChevronRight from '../../icons/chevron-right.svg'
import SigmaIcon from '../../icons/sigma.svg'
import TallyIcon from '../../icons/tally.svg'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { SVGIcon } from '../icon-svg/SVGIcon'
import { PivotTableHelper } from './PivotTableHelper'
import { PivotTableMethod } from './PivotTableMethod'
import './PivotTableMethodSelector.scss'

/**
 * @param props
 * @param {HTMLElement} props.parent
 * @param {number[]} props.methods
 * @param {Function} props.onChange
 * @param {Function} props.onBlur
 * @returns {*}
 * @constructor
 */
export const PivotTableMethodSelector = ({ parent, methods, onChange, onBlur }) => {
  /**
   * @type {Ref<HTMLElement>}
   */
  const element = useRef()

  const parentRect = parent.getBoundingClientRect()

  return (
    <div
      className="nbsp-ui-pivot-table-function-selector"
      style={{
        left: parentRect.x,
        top: parentRect.y + parentRect.height / 2 + window.scrollY
      }}
      ref={element}
      onMouseLeave={() => onBlur()}
    >
      {Object.values(PivotTableMethod).map(method => {
        const selected = methods.includes(method)

        return (
          <div
            className={ComponentHelper.composeClass(
              'method',
              selected && 'method-selected'
            )}
            onClick={() => onChange(selected ? methods.filter(each => each !== method) : [...methods, method])}
          >
            <SVGIcon
              className="icon"
              icon={
                match(method, {
                  [PivotTableMethod.Count]: <TallyIcon/>,
                  [PivotTableMethod.Sum]: <SigmaIcon/>,
                  [PivotTableMethod.Max]: <ChevronRight/>,
                  [PivotTableMethod.Min]: <ChevronLeft/>
                })
              }
            />
            <p className="label">{PivotTableHelper.methodToLabel(method)}</p>
          </div>
        )
      })}
    </div>
  )
}