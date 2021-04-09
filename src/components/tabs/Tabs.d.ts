import { FunctionComponent, JSX } from 'preact'
import { BaseProps } from "../types"

export interface TabsItem {
    label?: string
    icon?: JSX.Element
    closable?: boolean

    _id?: number | string
    _hidden?: boolean
}

export interface TabsProps extends BaseProps {
    vertical?: boolean
    tabs?: TabsItem[] | {}[]
    closable?: boolean

    onTabSelect?: (item: TabsItem) => void
    onTabClose?: (item: TabsItem) => void
}

export const Tabs: FunctionComponent<TabsProps>