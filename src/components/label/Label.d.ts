// @ts-ignore
import * as React from "react";
import { BaseProps } from '../types'

export interface LabelProps extends BaseProps {
    value?: string
    color?: string
    hook?: LabelLever
}

interface BaseLever {
    define: (key: string, value: any) => void
    refresh?: () => void
}

export interface LabelLever extends BaseLever {
    setValue: (value: string) => void
    getValue: () => string
    setColor: (color: string) => void
    getColor: () => string
}

export const Label: React.FunctionComponent<LabelProps>
