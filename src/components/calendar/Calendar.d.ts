import { FunctionComponent } from 'preact'

export interface CalendarProps {
    value?: Date
    width?: number
    height?: number
    onChange?: (date: Date) => void
}

export const Calendar: FunctionComponent<CalendarProps>