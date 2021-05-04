import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

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
    divided?: boolean
    data?: ListItem[] | {}[]
    selectedValues?: any[]

    row: (item?: ListItem | {}) => any

    onItemsSelect?: (selected: ListItem[], all: ListItem[]) => void
}

export const List: FunctionComponent<ListProps>