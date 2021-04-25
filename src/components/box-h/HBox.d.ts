import { FunctionComponent } from 'preact'
import { CompatAlign } from '../../utils/CompatAlign'
import { BaseProps, Containable } from '../types'

export interface HBoxProps extends BaseProps, Containable {
    reversed?: boolean
    vAlign?: CompatAlign
    hAlign?: CompatAlign
}

export const HBox: FunctionComponent<HBoxProps>