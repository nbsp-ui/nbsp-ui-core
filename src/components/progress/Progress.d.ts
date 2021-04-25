import { FunctionComponent, h } from 'preact'
import { BaseProps } from "../types"

export interface ProgressProps extends BaseProps {
    radius: number
    progress: number
    steps?: number
    cut?: number
    rotate?: number

    strokeWidth?: number
    fillColor?: string
    strokeLinecap?: 'butt' | 'round' | 'square'
    transition?: string

    trackStrokeWidth?: number
    trackStrokeLinecap?: 'butt' | 'round' | 'square'
    trackTransition?: string

    counterClockwise?: boolean
    inverse?: boolean

    initialAnimation?: boolean
    initialAnimationDelay?: number

    valueSize?: number | string
}

export const Progress: FunctionComponent<ProgressProps>