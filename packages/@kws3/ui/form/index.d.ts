/** @type {import("@kws3/ui/types").MakeForms} */
export const makeForms: typeof import("@kws3/ui/types").MakeForms;
/**
 * @param {string} v
 * @returns
 */
export function noDigits(v: string): boolean;
/**
 * @param {string} v
 * @returns
 */
export function notEmpty(v: string): boolean;
/**
 * @param {string} msg
 * @param {function} fn
 * @returns
 */
export function withMsg(msg: string, fn: Function): (v: any, otherFields: object) => string;
//# sourceMappingURL=index.d.ts.map