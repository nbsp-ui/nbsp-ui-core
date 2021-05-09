import { FunctionComponent } from 'preact/compat'

export interface WindowNotification {
  id?: string
  title?: string
  message?: string
}

export const Playground: FunctionComponent