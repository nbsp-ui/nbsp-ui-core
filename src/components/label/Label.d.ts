// @ts-ignore
import * as React from "react";
import { CompatIndent } from "../../utils/CompatIndent";

export interface LabelProps {
    className?: string
    value?: string
    color?: string
    padding?: CompatIndent
    margin?: CompatIndent
}

export const Label: React.FunctionComponent<LabelProps>