import { FunctionComponent } from 'preact'
import { BaseProps, Containable } from '../types'

export interface SelectorProps extends BaseProps, Containable {
  label?: string
  labelWidth?: string
  placeholder?: string
  icon?: string

  value?: number | string
  opened?: boolean

  onBlur?: () => any
}

export const Selector: FunctionComponent<SelectorProps>