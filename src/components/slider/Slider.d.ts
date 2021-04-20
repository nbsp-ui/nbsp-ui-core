import { FunctionComponent } from 'preact'
import { BaseProps } from "../types"

export interface SliderProps extends BaseProps {
    values: number[]
    max?: number
    min?: number
    step?: number
    dots?: number[]
    marks?: number[]
    range?: boolean

    onChange?: (value: number) => void
    onSecondChange?: (value: number) => void
}

export const Slider: FunctionComponent<SliderProps>