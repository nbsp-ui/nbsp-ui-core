// @ts-ignore
import * as React from "react";

export interface DatePickerProps {
    value?: Date
    width?: number
    height?: number
    fit?: boolean
    label?: string
    labelWidth?: string
    labelHeight?: string
}

export const DatePicker: React.FunctionComponent<DatePickerProps>