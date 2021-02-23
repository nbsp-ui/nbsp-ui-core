// @ts-ignore
import * as React from "react";

export interface PopupProps {
    children?: React.ReactElement | React.ReactElement[]
    width?: number
    height?: number
    to?: HTMLElement
    show?: boolean
    onHide?: () => void
}

export const Popup: React.FunctionComponent<PopupProps>