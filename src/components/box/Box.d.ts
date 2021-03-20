// @ts-ignore
import React, { MouseEventHandler } from 'react'
import { CompatAlign } from "../../utils/CompatAlign";
import { CompatIndent } from "../../utils/CompatIndent";

export interface BoxProps {
    children?: React.ReactElement | React.ReactElement[]
    vertical?: boolean
    className?: string
    reverse?: boolean
    width?: number
    height?: number
    fit?: boolean
    vAlign?: CompatAlign
    hAlign?: CompatAlign
    padding?: CompatIndent
    margin?: CompatIndent

    onClick: React.MouseEventHandler
}

export const Box: React.FunctionComponent<BoxProps>
