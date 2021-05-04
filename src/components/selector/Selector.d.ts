import { FunctionComponent } from 'preact'
import { BaseProps } from "../types"
import { ListItem } from "../list/List";

export interface SelectorProps extends BaseProps {
    label?: string
    labelWidth?: number
    value?: any
    placeholder?: string
    fontSize?: number
    multiselect?: boolean
    allSelectable?: boolean
    popupHeight?: number | string
    popupWidth?: number | string
    listHeight?: number | string

    filter?: (item: ListItem) => boolean
    search?: (item: ListItem, search: string) => boolean,

    data?: ListItem[]
    selectedValues?: any[]

    header?: (items?: ListItem[]) => any
    row?: (item?: ListItem) => any
    footer?: (items?: ListItem[]) => any

    onItemsSelect?: (selected: ListItem[], all: ListItem[]) => void
}

export const Selector: FunctionComponent<SelectorProps>