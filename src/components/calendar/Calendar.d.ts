import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface CalendarProps extends BaseProps {
    value?: Date

    onChange?: (date: Date) => any
}

export const Calendar: FunctionComponent<CalendarProps>