import { FunctionComponent, JSX } from 'preact'
import { BaseProps } from "../types"
import { ListItem } from "../list/List";

export interface SelectProps extends BaseProps {
    label?: string
    labelWidth?: number
    value?: any
    placeholder?: string
    fontSize?: number
    multiselect?: boolean
    allSelectable?: boolean

    filter?: (item: ListItem) => boolean
    search?: (item: ListItem, search: string) => boolean,

    data?: ListItem[] | {}[]

    header?: (items?: ListItem[]) => JSX.Element
    row?: () => JSX.Element
    footer?: (items?: ListItem[]) => JSX.Element

    onItemsSelected?: (selected: ListItem[], all: ListItem[]) => void
}

export const Select: FunctionComponent<SelectProps>