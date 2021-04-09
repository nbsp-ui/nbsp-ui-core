import { FunctionComponent } from 'preact'
import { BaseProps, Containable } from "../types"

export interface AccordionProps extends BaseProps, Containable {
    collapsed?: boolean
    contentHeight?: number

    onChange?: (collapsed: boolean) => void
}

export const Accordion: FunctionComponent<AccordionProps>