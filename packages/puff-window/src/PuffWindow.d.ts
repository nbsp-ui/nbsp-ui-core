import { BaseProps, Containable } from '@nbsp-ui/nbsp-ui-core'
import { FunctionComponent } from 'preact'

export interface PuffWindowProps extends BaseProps, Containable {
  title?: string
  icon?: string
}

export const PuffWindow: FunctionComponent<PuffWindowProps>