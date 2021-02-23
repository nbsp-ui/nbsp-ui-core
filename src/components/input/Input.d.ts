// @ts-ignore
import * as React from "react";
import { CompatIndent } from "../../utils/CompatIndent";

export interface InputProps {
    id?: string
    value?: string
    label?: string
    labelWidth?: number
    placeholder?: string
    width?: number
    height?: number
    fit?: boolean
    padding?: CompatIndent
    margin?: CompatIndent
    disabled?: boolean
    readOnly?: boolean
    before?: React.ReactElement
    after?: React.ReactElement
    beforeOnClick?: (event: MouseEvent) => void
    afterOnClick?: (event: MouseEvent) => void
}

export const Input: React.FunctionComponent<InputProps>