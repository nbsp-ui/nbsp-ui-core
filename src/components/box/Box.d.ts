// @ts-ignore
import React, { MouseEventHandler } from 'react'
import { CompatAlign } from "../../utils/CompatAlign";
import { BaseProps, Containable } from '../types'

export interface BoxProps extends BaseProps, Containable {
    vertical?: boolean
    reversed?: boolean
    vAlign?: CompatAlign
    hAlign?: CompatAlign
}

export const Box: React.FunctionComponent<BoxProps>
