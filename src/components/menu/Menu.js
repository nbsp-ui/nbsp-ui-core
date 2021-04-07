import React from 'react'
import { ComponentHelper } from "../../utils/ComponentHelper"
import { CompatAlign } from "../../utils/CompatAlign"
import { FAIcon } from "../fa-icon/FAIcon"
import { Box } from "../box/Box"
import './Menu.scss'

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
  const childrenMap = (children, _subMenuLevel = 1) => React.Children.map(children, child => match(child.type.name, {
    [MenuItem.name]: () => React.cloneElement(child, {
      selected: childrenSelected.find(c => c.id === child.props.id).selected,
      selectItem
    }),
    [SubMenu.name]: () => React.cloneElement(child, {
      expanded: childrenSelected.find(c => c.id === child.props.id).expanded,
      expandItem,
      _subMenuLevel,
      children: childrenMap(child.props.children, _subMenuLevel + 1)
    })
  })())

  const [childrenSelected, setChildrenSelected] = React.useState(collectChildren(props.children))

  console.log({childrenSelected})
  return (
    <Box vertical={props.vertical} id={id} className={className} style={style}>
      {childrenMap(props.children)}
    </Box>
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

  const subMenuContentColors = ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C']
  const getSubMenuContentColor = () => subMenuContentColors[String(props._subMenuLevel).charAt(String(props._subMenuLevel).length - 1)]

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
        paddingLeft={`${(props._subMenuLevel - 1) * 10 || 5}px`}
      >
        <Box vAlign={CompatAlign.Center}>
          {
            props.icon
            &&
            <div style={{width: '40px', textAlign: 'center'}}>
              <FAIcon icon={props.icon}/>
            </div>
          }
          <span>{props.title}</span>
        </Box>
        <FAIcon className={'expand-icon'} icon={'fas fa-chevron-right'} />
      </MenuItem>
      <div
        className={'submenu-content'}
        style={{
          maxHeight: props.expanded ? '500px' : '0px',
          opacity: props.expanded ? 1 : 0,
          backgroundColor: getSubMenuContentColor()
        }}
      >
        {
          React.Children.map(props.children, child => React.cloneElement(child, {
            paddingLeft: `${props._subMenuLevel * 10}px`
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