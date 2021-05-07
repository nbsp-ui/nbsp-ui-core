import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface CheckboxProps extends BaseProps {
    value?: boolean
    label?: string
    reversed?: boolean

    onChange?: (value: boolean) => void
}

export const Checkbox: FunctionComponent<CheckboxProps>