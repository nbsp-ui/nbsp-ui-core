import { cloneElement, h } from 'preact'
import { Children } from 'preact/compat'
import { useState } from 'preact/hooks'
import { CompatAlign } from '../../utils/CompatAlign'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { HBox } from '../box-h/HBox'
import { VBox } from '../box-v/VBox'
import { FAIcon } from '../icon-fa/FAIcon'
import './Menu.scss'

/**
 * @param {MenuProps} props
 * @returns {*}
 * @constructor
 */
export const Menu = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-menu', props.className)

  const style = ComponentHelper.composeStyle(props)

  const getMenuWidth = () => props.collapsed ? props.collapsedWidth : props.height
  const getMenuHeight = () => props.collapsed ? props.collapsedHeight : props.height
  const findItem = (id) => childrenProperties.find(c => c.id === id)
  const unselectAll = () => childrenProperties.forEach(child => child.selected = false)

  const selectItem = (id) => {
    unselectAll()
    findItem(id).selected = !findItem(id).selected
    setChildrenProperties([...childrenProperties])
  }

  const expandItem = (id) => {
    findItem(id).expanded = !findItem(id).expanded
    setChildrenProperties([...childrenProperties])
  }

  // TODO: Hmmm... toArray.reduce?
  const collectChildren = (children, childrenParams = []) => {
    Children.map(children, child => {
      const { id, selected = false, expanded = false } = child.props

      return match(child.type.name, {
        [MenuItem.name]: () => childrenParams.push({ id, selected }),
        [SubMenu.name]: () => childrenParams.push({ id, expanded }, ...collectChildren(child.props.children))
      })()
    })
    return childrenParams
  }

  // TODO: Hmmmmmmm...
  const childrenMap = (children, _subMenuLevel = 1) => Children.map(children, child => match(child.type.name, {
    [MenuItem.name]: () => cloneElement(child, {
      _menuCollapsed: props.collapsed,
      _collapsedShow: props.collapsedShow,
      selected: findItem(child.props.id).selected,
      selectItem
    }),
    [SubMenu.name]: () => cloneElement(child, {
      _subMenuLevel,
      _menuCollapsed: props.collapsed,
      _collapsedShow: props.collapsedShow,
      expanded: findItem(child.props.id).expanded,
      expandItem,
      children: childrenMap(child.props.children, _subMenuLevel + 1)
    })
  })())

  const [childrenProperties, setChildrenProperties] = useState(collectChildren(props.children))

  return (
    props.vertical
      ?
      <VBox
        id={id}
        className={className}
        style={{ ...style, width: getMenuWidth(), height: getMenuHeight() }}
      >
        {childrenMap(props.children)}
      </VBox>
      :
      <HBox
        id={id}
        className={className}
        style={{ ...style, width: getMenuWidth(), height: getMenuHeight() }}
      >
        {childrenMap(props.children)}
      </HBox>
  )
}

Menu.defaultProps = {
  width: '400px',
  height: '400px',
  collapsed: false,
  collapsedWidth: '40px',
  collapsedHeight: '100px'
}

/**
 * @param {SubMenuProps} props
 * @returns {*}
 * @constructor
 */
export const SubMenu = props => {
  const { id } = props

  const getLevelNumber = () => String(props._subMenuLevel).charAt(String(props._subMenuLevel).length - 1)
  const getDisplay = () => props._menuCollapsed ? (props._collapsedShow.includes(id) ? 'block' : 'none') : 'block'

  const className = ComponentHelper.composeClass('nbsp-ui-submenu', props.className)

  const classNameSubMenu = ComponentHelper.composeClass(
    'submenu-content',
    `submenu-content-level-${getLevelNumber()}`,
    props.expanded && 'submenu-content-expanded'
  )
  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      id={id}
      key={id}
      className={className}
      style={{ ...style, display: getDisplay() }}
      onClick={(e) => {
        props.onClick && props.onClick(e)
      }}
    >
      <MenuItem
        id={id}
        className={ComponentHelper.composeClass(props.expanded && 'nbsp-ui-menu-item-expanded')}
        expandItem={props.expandItem}
        paddingLeft={props._menuCollapsed ? 0 : `${(props._subMenuLevel - 1) * 10 || 5}px`}
      >
        <HBox vAlign={CompatAlign.Center}>
          {
            props.icon
            &&
            <div style={{ width: '40px', textAlign: 'center' }}>
              <FAIcon icon={props.icon}/>
            </div>
          }
          <span>{props.title}</span>
        </HBox>
        <FAIcon className={'expand-icon'} icon={'fas fa-chevron-right'}/>
      </MenuItem>
      <div className={classNameSubMenu}>
        {
          Children.map(props.children, child => cloneElement(child, { paddingLeft: `${props._subMenuLevel * 10}px` }))
        }
      </div>
    </div>
  )
}

SubMenu.defaultProps = {
  expanded: false
}

/**
 * @param {MenuItemProps} props
 * @returns {*}
 * @constructor
 */
export const MenuItem = props => {
  const { id } = props

  const className = ComponentHelper.composeClass(
    'nbsp-ui-menu-item',
    props.selected && 'nbsp-ui-menu-item-selected',
    props.className
  )

  const style = ComponentHelper.composeStyle(props, props.style)

  const getDisplay = () => props._menuCollapsed ? (props._collapsedShow.includes(id) ? 'flex' : 'none') : 'flex'
  const getPaddingLeft = () => props._menuCollapsed ? 0 : props.paddingLeft

  return (
    <div
      id={id}
      key={id}
      className={className}
      style={{ paddingLeft: getPaddingLeft(), display: getDisplay(), ...style }}
      onClick={(e) => {
        props.selectItem && props.selectItem(id)
        props.expandItem && props.expandItem(id)
        props.onClick && props.onClick(e)
      }}
    >
      {props.children}
    </div>
  )
}
