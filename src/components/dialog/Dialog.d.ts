import { FunctionComponent } from 'preact'
import { BaseProps, Containable } from "../types"

export interface DialogProps extends BaseProps, Containable {
    opened?: boolean

    onOpen?: () => void
    onClose?: () => void
    onOverlayClick?: (event: MouseEvent) => void
}

export const Dialog: FunctionComponent<DialogProps>