import { FunctionComponent } from 'preact'
import { BaseProps, Containable } from '../types'

export interface LoaderWrapperProps extends BaseProps, Containable {
    active: boolean
    size?: number
}

export const LoaderWrapper: FunctionComponent<LoaderWrapperProps>