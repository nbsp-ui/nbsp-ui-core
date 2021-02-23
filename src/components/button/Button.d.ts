// @ts-ignore
import * as React from "react";
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
    icon?: React.ReactElement,
    padding?: CompatIndent,
    margin?: CompatIndent
}

export const Button: React.FunctionComponent<ButtonProps>