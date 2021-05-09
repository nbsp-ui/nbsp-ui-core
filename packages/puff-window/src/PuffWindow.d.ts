import { BaseProps, Containable } from '@nbsp-ui/nbsp-ui-core'
import { FunctionComponent } from 'preact'

export interface PuffWindowProps extends BaseProps, Containable {
  title?: string
  icon?: string

  pages?: Page[]

  onClose?: () => any
  onOrient?: () => any
}

export interface Page {
  icon?: any
  content?: any
}

export const PuffWindow: FunctionComponent<PuffWindowProps>