/// <reference types="svelte/types/runtime/ambient" />
/**
 *
 * @param {string} msg
 * @param {object} [props={}]
 */
export function alert(msg: string, props?: object): Promise<any>;
/**
 *
 * @param {string} msg
 * @param {object} [props={}]
 */
export function prompt(msg: string, props?: object): Promise<any>;
/**
 *
 * @param {string} msg
 * @param {object} [props={}]
 */
export function confirm(msg: string, props?: object): Promise<any>;
export default Dialog;
declare class Dialog extends _Dialog {
}
declare namespace Dialog {
    export { alert };
    export { confirm };
    export { prompt };
}
import { default as _Dialog } from "./Dialog.svelte";
//# sourceMappingURL=index.d.ts.map