import { FunctionComponent } from 'preact'
import { BaseProps } from '../types'

export interface UploadProps extends BaseProps {
    multiple?: boolean
    accept?: string

    onClick?: (event: MouseEvent) => void
    onSelectedFiles?: (files: File[]) => void
    onItemRemoved?: (file: File) => void
}

export const Upload: FunctionComponent<UploadProps>