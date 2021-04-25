import { FunctionComponent, JSX } from 'preact'
import { BaseProps } from '../types'

export interface SVGIconProps extends BaseProps {
    icon?: *
    size?: number
}

export const SVGIcon: FunctionComponent<SVGIconProps>