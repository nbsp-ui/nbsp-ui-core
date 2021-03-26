// @ts-ignore
import React from "react"
import { BaseProps } from "../types"
import { ListItem } from "../list/List";

export interface SelectProps extends BaseProps {
    label?: string
    labelWidth?: number
    value?: any
    placeholder?: string
    fontSize?: number
    searchable?: boolean
    multiselect?: boolean
    allSelectable?: boolean

    data?: ListItem[] | {}[]

    // @ts-ignore
    header?: () => JSX.Element
    // @ts-ignore
    row?: () => JSX.Element
    // @ts-ignore
    footer?: () => JSX.Element

    headerOnClick?: (event: MouseEvent) => void
    footerOnClick?: (event: MouseEvent) => void
    onSelectChange?: (updatedItem: ListItem | {}, oldItem: ListItem | {}, selectedItems: ListItem[] | {}[]) => void
}

export const Select: React.FunctionComponent<SelectProps>