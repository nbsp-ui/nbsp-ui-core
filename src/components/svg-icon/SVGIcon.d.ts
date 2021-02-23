// @ts-ignore
import * as React from "react";
import { CompatIndent } from "../../utils/CompatIndent";

export interface SVGIconProps {
    icon?: React.ReactElement
    padding?: CompatIndent
    margin?: CompatIndent
}

export const SVGIcon: React.FunctionComponent<SVGIconProps>