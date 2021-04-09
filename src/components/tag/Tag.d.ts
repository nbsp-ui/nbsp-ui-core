import { FunctionComponent } from 'preact'
import { BaseProps } from "../types";

export interface TagProps extends BaseProps {
    value?: string
    color?: string
    backgroundColor?: string
    borderColor?: string

    onClick?: (event: MouseEvent) => void
    onClose?: (event: MouseEvent) => void
}

export const Tag: FunctionComponent<TagProps>