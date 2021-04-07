import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import './Menu.scss'
import { FAIcon } from "../fa-icon/FAIcon";

/**
 * @param {MenuProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Menu = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-menu', props.className)
  const style = ComponentHelper.composeStyle(props)

  const selectItem = (id) => {
    childrenSelected.forEach(child => child.selected = false)
    const currentChild = childrenSelected.find(child => child.id === id)
    currentChild.selected = !currentChild.selected
    setChildrenSelected([...childrenSelected])
  }

  const expandItem = (id) => {
    const currentChild = childrenSelected.find(child => child.id === id)
    currentChild.expanded = !currentChild.expanded
    setChildrenSelected([...childrenSelected])
  }

  // TODO: simplify
  const collectChildren = (children, childrenParams = []) => {
    React.Children.map(children, child => match(child.type.name, {
      [MenuItem.name]: () => childrenParams.push({
        id: child.props.id,
        selected: child.props.selected || false
      }),
      [SubMenu.name]: () => {
        childrenParams.push({
          id: child.props.id,
          expanded: child.props.expanded || false
        }, ...collectChildren(child.props.children))
      }
    })())
    return childrenParams
  }

  // TODO: simplify
  const childrenMap = (children, subMenuLevel = 1) => React.Children.map(children, child => match(child.type.name, {
    [MenuItem.name]: () => React.cloneElement(child, {
      selected: childrenSelected.find(c => c.id === child.props.id).selected,
      selectItem
    }),
    [SubMenu.name]: () => React.cloneElement(child, {
      expanded: childrenSelected.find(c => c.id === child.props.id).expanded,
      expandItem,
      subMenuLevel,
      children: childrenMap(child.props.children, subMenuLevel + 1)
    })
  })())

  const [childrenSelected, setChildrenSelected] = React.useState(collectChildren(props.children))

  console.log({childrenSelected})
  return (
    <div id={id} className={className} style={style}>
      {childrenMap(props.children)}
    </div>
  )
}

/**
 * @param {SubMenuProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const SubMenu = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-submenu', props.className)
  const style = ComponentHelper.composeStyle(props)

  // TODO: simplify
  const getBackgroundColor = () => match(props.subMenuLevel, {
    1: '#FAFAFA',
    2: '#F5F5F5',
    3: '#EEEEEE',
    4: '#E0E0E0',
    5: '#BDBDBD',
    6: '#9E9E9E'
  })

  return (
    <div
      id={id}
      key={id}
      className={className}
      style={style}
      onClick={(e) => {
        props.onClick && props.onClick(e)
      }}
    >
      <MenuItem
        id={id}
        className={ComponentHelper.composeClass({ use: 'nbsp-ui-menu-item-expanded', if: props.expanded })}
        expandItem={props.expandItem}
        paddingLeft={`${(props.subMenuLevel - 1) * 20 || 10}px`}
      >
        <span>{props.title}</span>
        <FAIcon className={'expand-icon'} icon={'fas fa-chevron-right'} />
      </MenuItem>
      <div
        className={'submenu-content'}
        style={{
          maxHeight: props.expanded ? '500px' : '0px',
          opacity: props.expanded ? 1 : 0,
          backgroundColor: getBackgroundColor()
        }}
      >
        {
          React.Children.map(props.children, child => React.cloneElement(child, {
            paddingLeft: `${props.subMenuLevel * 20}px`
          }))
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
 * @return {JSX.Element}
 * @constructor
 */
export const MenuItem = props => {
  const { id } = props

  const className = ComponentHelper.composeClass('nbsp-ui-menu-item',
    { use: 'nbsp-ui-menu-item-selected', if: props.selected },
    props.className)
  const style = ComponentHelper.composeStyle(props, props.style)

  return (
    <div
      id={id}
      key={id}
      className={className}
      style={{paddingLeft: props.paddingLeft, ...style}}
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