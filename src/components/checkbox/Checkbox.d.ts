// @ts-ignore
import * as React from "react";
import { CompatAlign } from "../../utils/CompatAlign";

export interface CheckboxProps {
    value?: boolean
    width?: number
    height?: number
    fit?: boolean
    label?: string
    align?: CompatAlign
    reversed?: boolean

    onChange: (value: boolean) => void
}

export const Checkbox: React.FunctionComponent<CheckboxProps>