// @ts-ignore
import React from "react"
import { BaseProps, Containable } from "../types"

export interface MenuProps extends BaseProps, Containable {
    vertical?: boolean
    collapsed?: boolean
    collapsedWidth?: number | string
    collapsedHeight?: number | string
    collapsedShow?: Array<number|string>
}

export const Menu: React.FunctionComponent<MenuProps>

export interface SubMenuProps extends BaseProps, Containable {
    _menuCollapsed?: boolean
    _collapsedShow?: Array<number|string>
    _subMenuLevel: number

    expanded?: boolean

    expandItem?: (id: number | string) => void

    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const SubMenu: React.FunctionComponent<SubMenuProps>

export interface MenuItemProps extends BaseProps, Containable {
    _menuCollapsed?: boolean
    _collapsedShow?: Array<number|string>

    selected?: boolean

    selectItem?: (id: number | string) => void

    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const MenuItem: React.FunctionComponent<MenuItemProps>