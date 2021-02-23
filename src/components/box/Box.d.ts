// @ts-ignore
import React from 'react'
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
}

export const Box: React.FunctionComponent<BoxProps>
