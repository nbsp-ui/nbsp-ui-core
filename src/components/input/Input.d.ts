// @ts-ignore
import * as React from "react";
import { BaseProps } from '../types'

export interface InputProps extends BaseProps {
    value?: string
    label?: string
    labelWidth?: number
    placeholder?: string
    disabled?: boolean
    readOnly?: boolean
    rule?: (value: any) => boolean
    before?: React.ReactElement
    after?: React.ReactElement
    beforeOnClick?: (event: MouseEvent) => void
    afterOnClick?: (event: MouseEvent) => void
    onChange?: (event: MouseEvent) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export const Input: React.FunctionComponent<InputProps>