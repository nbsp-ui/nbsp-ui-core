import { JSX, Ref } from 'preact'
import { CompatAlign } from '../utils/CompatAlign'
import { CompatIndent } from '../utils/CompatIndent'

export interface BaseProps {
    id?: string
    className?: string
    style?: JSX.CSSProperties
    reference?: Ref<HTMLElement>
    width?: number
    height?: number
    padding?: CompatIndent
    margin?: CompatIndent
    align?: CompatAlign
    fit?: boolean
    disabled?: boolean
}

export interface Containable {
    children?: JSX.Element | JSX.Element[]
}