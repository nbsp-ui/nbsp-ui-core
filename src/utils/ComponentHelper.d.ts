import { JSXInternal } from 'preact/src/jsx'
import CSSProperties = JSXInternal.CSSProperties

export namespace ComponentHelper {
    function composeClass(...items: string[]): string

    function composeStyle(props: {}, mappers?: {}): CSSProperties

    function extractListeners(props: {}): {}
}

interface Contract {
    use: string
    if: boolean | any
}