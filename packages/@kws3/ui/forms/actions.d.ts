/**
 * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
 *
 * @typedef {import("svelte/action").Action<HTMLElement, {
 * opts:object,
 * value:string,
 * placeholder:string,
 * klass:string,
 * style:string,
 * disabled:boolean,
 * color: ColorOptions
 * }>} FlatpickerAction
*/
/**
 * @type {FlatpickerAction}
 */
export let datepicker: FlatpickerAction;
/**
 * @type {FlatpickerAction}
*/
export let timepicker: FlatpickerAction;
export type ColorOptions = import('@kws3/ui/types').ColorOptions;
export type FlatpickerAction = import("svelte/action").Action<HTMLElement, {
    opts: object;
    value: string;
    placeholder: string;
    klass: string;
    style: string;
    disabled: boolean;
    color: ColorOptions;
}>;
//# sourceMappingURL=actions.d.ts.map