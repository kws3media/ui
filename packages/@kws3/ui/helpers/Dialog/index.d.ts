/// <reference types="svelte/types/runtime/ambient" />
/**
 *
 * @param {string} msg
 * @param {object?} props
 */
export function alert(msg: string, props: object | null): Promise<any>;
/**
 *
 * @param {string} msg
 * @param {object?} props
 */
export function prompt(msg: string, props: object | null): Promise<any>;
/**
 *
 * @param {string} msg
 * @param {object?} props
 */
export function confirm(msg: string, props: object | null): Promise<any>;
export default Dialog;
import Dialog from "./Dialog.svelte";
//# sourceMappingURL=index.d.ts.map