import { FunctionComponent } from 'preact'
import { BaseProps } from "../types"

export interface LoaderProps extends BaseProps {
    size?: number
    strokeWidth?: number
    strokeLinecap?: 'butt' | 'round' | 'square'
}

export const Loader: FunctionComponent<LoaderProps>