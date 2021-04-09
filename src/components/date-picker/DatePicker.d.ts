import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface DatePickerProps extends BaseProps {
    value?: Date
    label?: string
    labelWidth?: string
    labelHeight?: string
}

export const DatePicker: FunctionComponent<DatePickerProps>