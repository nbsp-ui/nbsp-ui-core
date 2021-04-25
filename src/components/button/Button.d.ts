import { FunctionComponent, JSX } from 'preact'
import { CompatIndent } from "../../utils/CompatIndent";
import { BaseProps } from '../types'

export enum CompatButtonType {
    Primary,
    Outline,
    Ghost,
    Icon
}

export interface ButtonProps extends BaseProps {
    type?: CompatButtonType
    label?: string
    icon?: any
}

export const Button: FunctionComponent<ButtonProps>