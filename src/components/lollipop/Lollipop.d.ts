// @ts-ignore
import * as React from "react";
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

export const Lollipop: React.FunctionComponent<LollipopProps>

export interface LollipopContainerProps extends BaseProps {

}

export const LollipopContainer: React.FunctionComponent<LollipopContainerProps>