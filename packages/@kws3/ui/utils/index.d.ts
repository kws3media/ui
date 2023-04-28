/**
 * Truncate a string.
 * @param {string} [str=""] - String to truncate, Default: `""`
 * @param {number} [len=0] - The number of characters to extract, Default: `""`
 */
export function truncate(str?: string, len?: number): string;
/**
 * Insert line breaks where newlines (\n) occur in the string.
 * @param {string} [input=""] - String to be checked, Default: `""`
 */
export function nl2br(input?: string): string;
/**
 * Clone an Object.
 * @param {object} [obj={}] - Object to be cloned, Default: `{}`
 */
export function cloneObject(obj?: object): any;
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * `threshold` milliseconds.
 * @param {function} [fn=function(){}] - The function that you want to execute after the debounce time
 * @param {number} [threshold=100] - The amount of time to wait, Default: `100`
 * @param {boolean} [isAsap=false] - flag to debounce early, Default: `false`
 *
 */
export function debounce(fn?: Function, threshold?: number, isAsap?: boolean): {
    (...args: any[]): any;
    cancel(): void;
};
/**
 * Capitalise First letter of string.
 * @param {string} [string=""] - A string whose first letter is to be capitalised, Default: `""`
 */
export function capitaliseFirstLetter(string?: string): string;
/**
 * Returns Date Object.
 * Makes mysql dates work in safari
 * @param {string} [strDate=""] - Date String., Default: `""`
 */
export function createDate(strDate?: string): Date;
/**
 * Returns currency format.
 * @param {number} [n=''] - Number., Default: `""`
 */
export function currency(n?: number): string;
/**
 * Converts date to ordinal.
 * @param {number} [n=''] - Number., Default: `""`
 */
export function dateToOrdinal(n?: number): string;
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * @param {number} [min] - Minimum Number.
 * @param {number} [max] - Maximum Number.
 */
export function randomIntegerFromInterval(min?: number, max?: number): number;
/**
 * Returns random percentage.
 * @param {number} [min=1] - Minimum Number, Default: `1`
 * @param {number} [max=100] - Maximum Number, Default: `100`
 */
export function randomPercent(min?: number, max?: number): string;
/**
 * Downloads file.
 * @param {Object} [data={}] - File data.
 * @param {string} [fileName=''] - File Name.
 */
export function fileDownloader(data?: any, fileName?: string): void;
/**
 * Request an animation before the next repaint.
 * @param {function} [callback=function(){}] - callback function
 */
export const rAF: any;
//# sourceMappingURL=index.d.ts.map