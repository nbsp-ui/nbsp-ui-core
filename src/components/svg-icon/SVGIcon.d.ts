// @ts-ignore
import * as React from "react";
import { BaseProps } from '../types'

export interface SVGIconProps extends BaseProps {
    icon?: React.ReactElement
    size?: number
}

export const SVGIcon: React.FunctionComponent<SVGIconProps>