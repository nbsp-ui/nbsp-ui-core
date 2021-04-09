import { RefObject } from 'preact'

export namespace ReactHelper {
    function useReferredState<T>(initialValue?: T): [state: T, setState: (value: T) => void, reference: { current: T }]

    function usePatchedState<T>(initialValue?: T): [state: T, patchState: (value: T) => void]

    function useEffectGlobalEventListener(event: string, listener: EventListener): void

    function useRefEventListener(listener: EventListener): RefObject<EventListener>

    function registerGlobalMouseEventListener<E extends keyof DocumentEventMap>(event: E, listener: (event: MouseEvent) => any): void

    function useRefresh(): () => void

    function expose(): void
}