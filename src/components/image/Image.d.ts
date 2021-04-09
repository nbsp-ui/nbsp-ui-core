import { FunctionComponent, h } from 'preact'
import { BaseProps } from "../types"

export interface ImageProps extends BaseProps {
    src?: string
    srcSet?: string
    sizes?: string
    alt?: string

    onClick?: (event: MouseEvent) => void
    onError?: (error: ErrorEvent) => void
}

export const Image: FunctionComponent<ImageProps>