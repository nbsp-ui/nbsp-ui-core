// @ts-ignore
import React from "react"
import { BaseProps, Containable } from "../types"

export interface MenuProps extends BaseProps, Containable {
    vertical?: boolean
}

export const Menu: React.FunctionComponent<MenuProps>

export interface SubMenuProps extends BaseProps, Containable {
    _subMenuLevel: number
    expanded?: boolean

    expandItem?: (id: number | string) => void

    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const SubMenu: React.FunctionComponent<SubMenuProps>

export interface MenuItemProps extends BaseProps, Containable {
    selected?: boolean

    selectItem?: (id: number | string) => void

    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const MenuItem: React.FunctionComponent<MenuItemProps>