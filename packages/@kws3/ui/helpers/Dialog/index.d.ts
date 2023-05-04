/// <reference types="svelte/types/runtime/ambient" />
/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function alert(msg: string, props?: DialogProps): Promise<any>;
/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function prompt(msg: string, props?: DialogProps): Promise<any>;
/**
 *
 * @param {string} msg
 * @param {DialogProps} [props={}]
 */
export function confirm(msg: string, props?: DialogProps): Promise<any>;
export default Dialog;
export type DialogProps = import('@kws3/ui/types').DialogProps;
declare class Dialog extends _Dialog {
}
declare namespace Dialog {
    export { alert };
    export { confirm };
    export { prompt };
}
import { default as _Dialog } from "./Dialog.svelte";
//# sourceMappingURL=index.d.ts.map