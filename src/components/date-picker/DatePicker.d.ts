// @ts-ignore
import * as React from "react";
import { BaseProps } from '../types'

export interface DatePickerProps extends BaseProps {
    value?: Date
    label?: string
    labelWidth?: string
    labelHeight?: string
}

export const DatePicker: React.FunctionComponent<DatePickerProps>