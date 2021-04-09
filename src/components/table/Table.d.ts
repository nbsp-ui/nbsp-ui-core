import { FunctionComponent, h, JSX } from 'preact'
import { BaseProps } from '../types'

export interface TableProps extends BaseProps {
    columns?: TableColumn[]
    data?: {}[]

    headerHeight?: number
    footerHeight?: number
}

export interface TableColumn {
    header?: (items?: {}[]) => JSX.Element
    cell?: (item?: {}) => JSX.Element
    footer?: (item?: {}) => JSX.Element

    width: number
    sort: (a: {}, b: {}) => number

    _id: string
    _position: number
    _sortedByAsc: boolean
    _sortedByDesc: boolean
    _headerElement: HTMLElement
}

export const Table: FunctionComponent<TableProps>