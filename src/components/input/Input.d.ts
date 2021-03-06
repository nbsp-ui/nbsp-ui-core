import { FunctionComponent, JSX } from 'preact'
import { BaseProps } from '../types'

export interface InputProps extends BaseProps {
    value?: string
    label?: string
    labelWidth?: number
    placeholder?: string
    readOnly?: boolean
    rule?: (value: any) => boolean
    before?: any
    after?: any
    beforeOnClick?: (event: MouseEvent) => void
    afterOnClick?: (event: MouseEvent) => void
    onChange?: (event: MouseEvent) => void
    onBlur?: (event: FocusEvent) => void
    onInputClick?: (event: MouseEvent) => void
}

export const Input: FunctionComponent<InputProps>