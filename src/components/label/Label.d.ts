import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface LabelProps extends BaseProps {
  value?: string
  color?: string
}

export const Label: FunctionComponent<LabelProps>
