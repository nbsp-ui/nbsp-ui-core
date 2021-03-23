// @ts-ignore
import React from "react"
import { CompatIndent } from "../../utils/CompatIndent"

export interface TagProps {
    className?: string
    value?: string
    color?: string
    backgroundColor?: string
    borderColor?: string
    closeButton?: boolean
    padding?: CompatIndent
    margin?: CompatIndent

    onCloseClick: (event: MouseEvent) => void
}

export const Tag: React.FunctionComponent<TagProps>