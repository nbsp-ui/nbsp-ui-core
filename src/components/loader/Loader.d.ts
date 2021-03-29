// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface LoaderProps extends BaseProps {
    id?: number
}

export const Loader: React.FunctionComponent<LoaderProps>