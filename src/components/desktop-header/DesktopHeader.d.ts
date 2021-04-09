import { FunctionComponent, h } from 'preact'

export interface DesktopHeaderProps {
    title?: string
    subtitle?: string
}

export const DesktopHeader: FunctionComponent<DesktopHeaderProps>