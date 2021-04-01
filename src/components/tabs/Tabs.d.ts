// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface TabsItem {
    _id: number | string
    header: string
    icon: string
    closable: boolean
}

export interface TabsProps extends BaseProps {
    vertical?: boolean
    tabs: TabsItem[] | {}[]

    onChange?: (updatedItem: TabsItem, oldItem: TabsItem) => void
    onClose?: (item: TabsItem) => void
}

export const Tabs: React.FunctionComponent<TabsProps>