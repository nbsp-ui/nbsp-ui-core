// @ts-ignore
import * as React from "react";

export interface PopupProps {
    children?: React.ReactElement | React.ReactElement[]
    width?: number
    height?: number
    to?: HTMLElement
    showRequested?: boolean
    onHide?: () => void
    onBlur?: () => void
    onLeave?: () => void
}

export const Popup: React.FunctionComponent<PopupProps>