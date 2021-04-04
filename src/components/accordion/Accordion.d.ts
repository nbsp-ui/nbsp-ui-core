// @ts-ignore
import React from "react"
import { BaseProps, Containable } from "../types"

export interface AccordionProps extends BaseProps, Containable {
    collapsed?: boolean
    contentHeight?: number

    onChange?: (collapsed: boolean) => void
}

export const Accordion: React.FunctionComponent<AccordionProps>