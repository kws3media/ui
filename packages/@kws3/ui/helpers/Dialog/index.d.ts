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
declare const _default: Dialog;
export default _default;
export type DialogProps = import('@kws3/ui/types').DialogProps;
declare class Dialog {
    /**
     *
     * @param {string} msg
     * @param {DialogProps} [props={}]
     */
    alert(msg: string, props?: DialogProps): Promise<any>;
    /**
     *
     * @param {string} msg
     * @param {DialogProps} [props={}]
     */
    prompt(msg: string, props?: DialogProps): Promise<any>;
    /**
     *
     * @param {string} msg
     * @param {DialogProps} [props={}]
     */
    confirm(msg: string, props?: DialogProps): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map