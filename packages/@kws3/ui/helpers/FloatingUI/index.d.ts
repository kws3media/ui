/// <reference types="svelte" />
export namespace FloatiesStore {
    export { create };
    export { remove };
    export { subscribe };
}
/**
 * @typedef {import("@kws3/ui/types").FloatieType} FloatieType
 */
/**
 * @type {FloatieType}
 */
export const Notifications: FloatieType;
/**
 * @type {FloatieType}
 */
export const Toasts: FloatieType;
/**
 * @type {FloatieType}
 */
export const Snackbars: FloatieType;
export type FloatieType = import("@kws3/ui/types").FloatieType;
declare function create(newItem: any): {
    props: any;
    destroy: () => void;
};
declare function remove(props: any): void;
declare const subscribe: (this: void, run: import("svelte/store").Subscriber<{
    top: {
        notification: any[];
        snackbar: any[];
        toast: any[];
    };
    bottom: {
        notification: any[];
        snackbar: any[];
        toast: any[];
    };
}>, invalidate?: import("svelte/store").Invalidator<{
    top: {
        notification: any[];
        snackbar: any[];
        toast: any[];
    };
    bottom: {
        notification: any[];
        snackbar: any[];
        toast: any[];
    };
}>) => import("svelte/store").Unsubscriber;
export {};
//# sourceMappingURL=index.d.ts.map