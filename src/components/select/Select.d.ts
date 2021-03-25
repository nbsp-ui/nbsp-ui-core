// @ts-ignore
import React from "react"
import { BaseProps } from "../types"
import { ListItem } from "../list/List";

export interface SelectProps extends BaseProps {
    label?: string
    labelWidth?: number
    placeholder?: string
    fontSize?: number
    multiselect?: boolean

    data?: ListItem[] | {}[]

    // @ts-ignore
    listHeader?: () => JSX.Element
    // @ts-ignore
    listRow?: () => JSX.Element
    // @ts-ignore
    listFooter?: () => JSX.Element

    listHeaderOnClick?: (event: MouseEvent) => void
    listFooterOnClick?: (event: MouseEvent) => void
    onSelectChange?: (updatedItem: {}, oldItem: {}) => void
}

export const Select: React.FunctionComponent<SelectProps>