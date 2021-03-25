// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface ListItem {
    id: number | string

    _selected: boolean
}

export interface ListProps extends BaseProps {
    color?: string
    fontSize?: number
    multiselect?: boolean
    data?: ListItem[] | {}[]

    // @ts-ignore
    row: (item?: ListItem | {}) => JSX.Element

    onChange?: (updatedItem: {}, oldItem: {}) => void
}

export const List: React.FunctionComponent<ListProps>