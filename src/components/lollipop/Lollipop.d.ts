import { FunctionComponent } from 'preact'
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
}

export const Lollipop: FunctionComponent<LollipopProps>

export interface LollipopContainerProps extends BaseProps {

}

export const LollipopContainer: FunctionComponent<LollipopContainerProps>