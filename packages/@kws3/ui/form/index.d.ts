export function makeForms(items: any): any[] | {
    formData: import("svelte/store").Writable<any>;
    errors: import("svelte/store").Readable<any>;
    touched: import("svelte/store").Readable<any>;
    isValid: import("svelte/store").Readable<boolean>;
    isTouched: import("svelte/store").Readable<any>;
    tracker: import("svelte/store").Writable<any>;
    update: (newData: any) => void;
    reset: (e: any) => void;
    setValidators: (newValidators: any) => void;
};
export function notEmpty(v: any): boolean;
export function noDigits(v: any): boolean;
export function withMsg(msg: any, fn: any): (v: any, otherFields: any) => any;
//# sourceMappingURL=index.d.ts.map