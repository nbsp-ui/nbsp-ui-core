import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface TableProps extends BaseProps {
    columns?: TableColumn[]
    data?: {}[]
    selection?: string[]
    multiselect?: boolean

    filter?: (item: {}) => boolean

    onItemsSelect?: (items: { selected: {}[], all: {}[] }) => void
    onItemClick?: (item: {}) => void

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