import * as React from 'react'
import { CompatIndent } from '../utils/CompatIndent'

export interface BaseProps {
    className?: string
    width?: number
    height?: number
    padding?: CompatIndent
    margin?: CompatIndent
    fit?: boolean
}

export interface Containable {
    children?: React.ReactElement | React.ReactElement[]
}