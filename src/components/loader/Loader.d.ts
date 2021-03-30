// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface LoaderProps extends BaseProps {
    id?: number,
    stroke?: string,
    strokeWidth?: number
    strokeLinecap?: 'butt' | 'round' | 'square'
}

export const Loader: React.FunctionComponent<LoaderProps>