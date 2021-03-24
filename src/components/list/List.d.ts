// @ts-ignore
import React from "react"
import { CompatIndent } from "../../utils/CompatIndent"

export interface ListItem {
    id: number | string

    _selected: boolean
}

export interface ListProps {
    className?: string
    value?: string
    color?: string
    padding?: CompatIndent
    margin?: CompatIndent
    data?: ListItem[] | {}[]

    onChange?: (updatedItem: {}, oldItem: {}) => void
}

export const List: React.FunctionComponent<ListProps>