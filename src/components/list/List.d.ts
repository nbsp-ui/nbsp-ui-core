// @ts-ignore
import React from "react"
import { CompatIndent } from "../../utils/CompatIndent"

export interface ListItem {
    selected?: boolean
    style?: {}
}

export interface ListProps {
    className?: string
    value?: string
    color?: string
    padding?: CompatIndent
    margin?: CompatIndent
    data?: ListItem[] | {}[]

    onChange?: (newValue: {}, oldValue: {}) => void
}

export const List: React.FunctionComponent<ListProps>