// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface ProgressProps extends BaseProps {
    radius: number
    progress: number
    steps?: number
    cut?: number
    rotate?: number

    strokeWidth?: number
    strokeColor?: string
    fillColor?: string
    strokeLinecap?: 'butt' | 'round' | 'square'
    transition?: string

    trackStrokeColor?: '#e6e6e6'
    trackStrokeWidth?: number
    trackStrokeLinecap?: 'butt' | 'round' | 'square'
    trackTransition?: string

    counterClockwise?: boolean
    inverse?: boolean

    initialAnimation?: boolean
    initialAnimationDelay?: number

    valueSize?: number | string
}

export const Progress: React.FunctionComponent<ProgressProps>