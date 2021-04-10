import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface UploaderProps extends BaseProps {
    multiple?: boolean
    accept?: string

    onClick?: (event: MouseEvent) => void
    onSelectedFiles?: (files: File[]) => void
    onItemRemoved?: (file: File) => void
}

export const Uploader: FunctionComponent<UploaderProps>