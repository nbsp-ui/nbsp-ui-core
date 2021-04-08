// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface TabsItem {
    label?: string
    // @ts-ignore
    icon?: JSX.Element
    closable?: boolean

    _id?: number | string
    _hidden?: boolean
}

export interface TabsProps extends BaseProps {
    vertical?: boolean
    tabs?: TabsItem[] | {}[]
    closable?: boolean

    onTabSelect?: (tab: TabsItem) => void
    onClose?: (tab: TabsItem) => void
}

export const Tabs: React.FunctionComponent<TabsProps>