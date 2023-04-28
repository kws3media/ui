export namespace FloatiesStore {
    export { create };
    export { remove };
    export { subscribe };
}
export namespace Notifications {
    export function create_1(opts: any): {
        props: any;
        destroy: () => void;
    };
    export { create_1 as create };
    import remove_1 = remove;
    export { remove_1 as remove };
}
export namespace Toasts {
    export function create_2(opts: any): {
        props: any;
        destroy: () => void;
    };
    export { create_2 as create };
    import remove_2 = remove;
    export { remove_2 as remove };
}
export namespace Snackbars {
    export function create_3(opts: any): {
        props: any;
        destroy: () => void;
    };
    export { create_3 as create };
    import remove_3 = remove;
    export { remove_3 as remove };
}
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
}>, invalidate?: (value?: {
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
}) => void) => import("svelte/store").Unsubscriber;
export {};
//# sourceMappingURL=index.d.ts.map