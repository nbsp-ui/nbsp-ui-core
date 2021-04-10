import { FunctionComponent, JSX } from 'preact'
import { BaseProps } from '../types'

export interface SVGIconProps extends BaseProps {
    icon?: JSX.Element
    size?: number
}

export const SVGIcon: FunctionComponent<SVGIconProps>