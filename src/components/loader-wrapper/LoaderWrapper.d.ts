// @ts-ignore
import React from "react"
import { BaseProps, Containable } from '../types'

export interface LoaderWrapperProps extends BaseProps, Containable {
    active: boolean
    size?: number
}

export const LoaderWrapper: React.FunctionComponent<LoaderWrapperProps>