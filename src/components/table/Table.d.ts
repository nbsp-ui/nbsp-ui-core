import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface TableItem {
    _id: string
    _selected: boolean
}

export interface TableProps extends BaseProps {
    columns?: TableColumn[]
    data?: TableItem[]
    multiselect?: boolean

    filter?: (item: TableItem) => boolean

    onItemsSelect?: (items: { selected: TableItem[], all: TableItem[] }) => void
    onItemClick?: (item: TableItem) => void

    headerHeight?: number
    footerHeight?: number
    rowHeight?: number
}

export interface TableColumn {
    header?: (items?: {}[]) => any
    cell?: (item?: {}) => any
    footer?: (item?: {}) => any

    width: number
    sort: (a: {}, b: {}) => number

    _id: string
    _position: number
    _sortedByAsc: boolean
    _sortedByDesc: boolean
    _headerElement: HTMLElement
}

export const Table: FunctionComponent<TableProps>