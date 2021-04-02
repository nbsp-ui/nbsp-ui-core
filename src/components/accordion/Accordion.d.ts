// @ts-ignore
import React from "react"
import { BaseProps } from "../types"

export interface AccordionProps extends BaseProps {
    collapsed?: boolean
    contentHeight?: number
    children?: React.ReactNode | React.ReactNode[]

    onChange?: (collapsed: boolean) => void
}

export const Accordion: React.FunctionComponent<AccordionProps>