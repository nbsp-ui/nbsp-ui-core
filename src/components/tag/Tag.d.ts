// @ts-ignore
import React from 'react'
import { CompatIndent } from '../../utils/CompatIndent'

export interface TagProps {
    className?: string
    value?: string
    color?: string
    backgroundColor?: string
    borderColor?: string
    padding?: CompatIndent
    margin?: CompatIndent

    onClick: (event: MouseEvent) => void
    onClose: (event: MouseEvent) => void
}

export const Tag: React.FunctionComponent<TagProps>