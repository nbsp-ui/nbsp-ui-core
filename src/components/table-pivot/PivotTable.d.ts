import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface PivotTableProps extends BaseProps {
    data?: {}[]
    fields?: {
        columns?: (string | PivotTableColumnField)[]
        rows?: (string | PivotTableRowField)[]
        all?: PivotTableField[]
    }
}

export interface PivotTableField {
    key?: string
    label?: string
}

export interface PivotTableColumnField extends PivotTableField{
    as?: PivotTableMethod | PivotTableMethod[]
    position?: number
}

export interface PivotTableRowField extends PivotTableField {
}

export interface PivotTableUnit<T> {
    value?: string
    field?: T
}

export interface PivotTableContainerUnit {
    id: string
    opened: boolean
    value: string
    items: {}[]
    children?: PivotTableContainerUnit[]
    aggregations?: {}
}

export enum PivotTableMethod {
    Count,
    Sum,
    Max,
    Min
}

export const PivotTable: FunctionComponent<PivotTableProps>