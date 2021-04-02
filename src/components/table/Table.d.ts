// @ts-ignore
import React from "react"
import { CompatIndent } from "../../utils/CompatIndent"

export interface TableProps {
    padding?: CompatIndent
    margin?: CompatIndent
    columns?: TableColumn[]
    data?: {}[]

    headerHeight?: number
    footerHeight?: number
}

export interface TableColumn {
    // @ts-ignore
    header?: (items?: {}[]) => JSX.Element
    // @ts-ignore
    cell?: (item?: {}) => JSX.Element
    // @ts-ignore
    footer?: (item?: {}) => JSX.Element

    width: number
    sort: (a: {}, b: {}) => number

    _id: string
    _position: number
    _sortedByAsc: boolean
    _sortedByDesc: boolean
    _headerElement: HTMLElement
}

export const Table: React.FunctionComponent<TableProps>