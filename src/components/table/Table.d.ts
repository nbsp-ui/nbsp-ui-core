import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface TableProps extends BaseProps {
    columns?: TableColumn[]
    data?: {}[]
    multiselect?: boolean

    select?: (item: {}) => any
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
    _headerElement: HTMLElement
}

export const Table: FunctionComponent<TableProps>