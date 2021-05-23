import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface DateSelectorProps extends BaseProps {
    value?: Date
    label?: string
    labelWidth?: string

    onChange?: (date: Date) => any
}

export const DateSelector: FunctionComponent<DateSelectorProps>