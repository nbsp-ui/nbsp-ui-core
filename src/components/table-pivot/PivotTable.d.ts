import { FunctionComponent } from 'preact/compat'
import { BaseProps } from '../types'

export interface PivotTableProps extends BaseProps {
    data?: {}[]
    fields?: {
        columns?: (string | PivotTableColumnField)[]
        rows?: (string | PivotTableRowField)[]
    }
}

export interface PivotTableColumnField {
    key?: string
    label?: string
    as?: ColumnAggregation
}

export interface PivotTableRowField {
    key?: string
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

export enum ColumnAggregation {
    Count,
    Sum
}

export const PivotTable: FunctionComponent<PivotTableProps>