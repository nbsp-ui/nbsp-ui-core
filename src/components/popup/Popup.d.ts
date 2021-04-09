import { FunctionComponent, RefObject } from 'preact'
import { BaseProps, Containable } from '../types'

export interface PopupProps extends BaseProps, Containable {
    translateX?: string
    to?: RefObject<HTMLElement>
    showed?: boolean

    onBlur?: () => void
}

export const Popup: FunctionComponent<PopupProps>