import { FunctionComponent } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { BaseProps, Containable } from '../types'

export interface VBoxProps extends BaseProps, Containable {
    reversed?: boolean
    vAlign?: CompatAlign
    hAlign?: CompatAlign
}

export const VBox: FunctionComponent<VBoxProps>