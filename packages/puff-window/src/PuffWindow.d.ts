import { BaseProps, Containable } from '@nbsp-ui/nbsp-ui-core'
import { FunctionComponent } from 'preact'

export interface PuffWindowProps extends BaseProps, Containable {
  title?: string
  icon?: string

  pages?: Page[]
}

export interface Page {
  icon?: any
  content?: any
}

export interface PuffWindowNotification {
  id?: string
  title?: string
  message?: string
}

export const PuffWindow: FunctionComponent<PuffWindowProps>