/**
 * @typedef {import("svelte/action").Action<HTMLElement, {
 * opts:object,
 * value:string,
 * placeholder:string,
 * klass:string,
 * style:string,
 * disabled:boolean,
 * color:string
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
export type FlatpickerAction = import("svelte/action").Action<HTMLElement, {
    opts: object;
    value: string;
    placeholder: string;
    klass: string;
    style: string;
    disabled: boolean;
    color: string;
}>;
//# sourceMappingURL=actions.d.ts.map