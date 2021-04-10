import { FunctionComponent, Provider } from 'preact'
import { BaseProps } from "../types";

export enum LollipopType {
    Default,
    Warning,
    Error,
    Success
}

export interface LollipopProps extends BaseProps {
    title?: string
    description?: string
    duration?: string
    indicated?: boolean
    indefinite?: boolean

    onClick: (event: MouseEvent) => void
    onMouseEnter: (event: MouseEvent) => void
    onMouseLeave: (event: MouseEvent) => void
}

export const Lollipop: FunctionComponent<LollipopProps>

export interface LollipopProviderProps {

}

export const LollipopProvider: Provider<LollipopProviderProps>
