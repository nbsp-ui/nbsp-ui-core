// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface ListItem {
    _id: number
    _selected: boolean
    _hidden: boolean

    value: any
}

export interface ListProps extends BaseProps {
    color?: string
    fontSize?: number
    multiselect?: boolean
    data?: ListItem[] | {}[]
    searchValue?: string
    selectAll?: MouseEvent

    // @ts-ignore
    row: (item?: ListItem | {}) => JSX.Element

    onChange?: (updatedItem: ListItem | {}, oldItem: ListItem | {}, selectedItems: ListItem[] | {}[]) => void
}

export const List: React.FunctionComponent<ListProps>