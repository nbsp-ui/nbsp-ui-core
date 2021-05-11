import { ComponentHelper, ReactHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import './Bar.sass'
import { Control } from './Control'
import { Header } from './Header'
import { Menu } from './Menu'
import { Pager } from './Pager'

/**
 * @param props
 * @param {string} props.title
 * @param {string} props.icon
 * @param {Page[]} props.pages
 * @param {Function} props.onCloseClick
 * @param {Function} props.onOrientClick
 * @param {Function} props.onMouseDown
 * @returns {*}
 * @constructor
 */
export const Bar = ({ title, icon, pages, onCloseClick, onOrientClick, onMouseDown }) => {
  const [{ expanded, selection }, patchState] = ReactHelper.usePatchedState({
    expanded: false,
    selection: 0
  })

  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-bar',
    expanded && 'nbsp-ui-pw-bar-expanded'
  )

  return (
    <div
      className={className}
      onMouseDown={onMouseDown}
    >
      <div className="☂️">
        <Header
          title={title}
          icon={icon}
          expanded={expanded}
          onClick={() => patchState({
            expanded: !expanded
          })}
        />
        {!!pages.length && (
          <Menu
            expanded={expanded}
            pages={pages}
            selection={selection}
            onSelectionChange={selection => patchState({
              selection
            })}
          />
        )}
        {!!pages.length && (
          <Pager
            expanded={expanded}
            pages={pages}
            selection={selection}
          />
        )}
        {!pages.length && (
          <div className="➡️"/>
        )}
        <Control
          expanded={expanded}
          onCloseClick={onCloseClick}
          onOrientClick={onOrientClick}
        />
        <div className="⬅️"/>
      </div>
    </div>
  )
}