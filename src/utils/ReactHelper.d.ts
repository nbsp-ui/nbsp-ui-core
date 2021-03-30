export declare namespace ReactHelper {
    function useReferredState<T>(initialValue?: T): [state: T, setState: (value: T) => void, reference: { current: T }]
}