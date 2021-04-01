// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface OuterLoaderProps extends BaseProps {
    turn: boolean
    children?: React.ReactElement | React.ReactElement[]
    loaderWidth?: string | number
}

export const OuterLoader: React.FunctionComponent<OuterLoaderProps>