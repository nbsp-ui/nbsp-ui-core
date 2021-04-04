// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface ImageProps extends BaseProps {
    src: string
    srcSet?: string
    sizes?: string
    alt?: string

    onClick?: (event: MouseEvent) => void
    onError?: (error: ErrorEvent) => void
}

export const Image: React.FunctionComponent<ImageProps>