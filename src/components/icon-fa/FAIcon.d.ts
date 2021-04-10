import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface FAIconProps extends BaseProps {
    icon?: string
    color?: string
    onClick?: () => void
}

export const FAIcon: FunctionComponent<FAIconProps>