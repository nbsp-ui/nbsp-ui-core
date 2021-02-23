// @ts-ignore
import * as React from "react";
import { CompatIndent } from "../../utils/CompatIndent";

export interface FAIconProps {
    icon?: string
    className?: string
    color?: string
    padding?: CompatIndent
    margin?: CompatIndent
    onClick?: () => void
}

export const FAIcon: React.FunctionComponent<FAIconProps>