import { FunctionComponent } from 'preact'

export interface SpacerProps {
    vertical?: boolean
    size?: number
}

export const Spacer: FunctionComponent<SpacerProps>