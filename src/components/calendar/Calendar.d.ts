// @ts-ignore
import * as React from "react";

export interface CalendarProps {
    value?: Date
    width?: number
    height?: number
    onChange?: (date: Date) => void
}

export const Calendar: React.FunctionComponent<CalendarProps>