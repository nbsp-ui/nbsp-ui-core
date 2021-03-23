// @ts-ignore
import React from "react"
import { CompatIndent } from "../../utils/CompatIndent"

export interface ListProps {
    className?: string
    value?: string
    color?: string
    padding?: CompatIndent
    margin?: CompatIndent
    data?: {}[]

    onChange?: (newValue: {}, oldValue: {}) => void
}

export const List: React.FunctionComponent<ListProps>