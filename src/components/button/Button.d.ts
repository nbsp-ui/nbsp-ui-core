import { FunctionComponent, JSX } from 'preact'
import { CompatIndent } from "../../utils/CompatIndent";

export enum CompatButtonType {
    Primary,
    Outline,
    Ghost,
    Icon
}

export interface ButtonProps {
    className?: string
    type?: CompatButtonType
    disabled?: boolean
    label?: string
    icon?: JSX.Element,
    padding?: CompatIndent,
    margin?: CompatIndent
}

export const Button: FunctionComponent<ButtonProps>