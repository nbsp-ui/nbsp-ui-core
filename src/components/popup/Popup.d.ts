// @ts-ignore
import * as React from "react";
import { BaseProps, Containable } from '../types'

export interface PopupProps extends BaseProps, Containable {
    translateX?: string
    to?: HTMLElement
    showed?: boolean

    onBlur?: () => void
}

export const Popup: React.FunctionComponent<PopupProps>