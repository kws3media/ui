/** @typedef {typeof __propDef.props}  DatepickerProps */
/** @typedef {typeof __propDef.events}  DatepickerEvents */
/** @typedef {typeof __propDef.slots}  DatepickerSlots */
/**
 * @param {string} [value=""] - Accepts a date value in the format `yyyy-mm-dd`
 *
 * In `range_mode`, the expected format is `yyyy-mm-dd to yyyy-mm-dd`
 *
 * This property can be bound to, to fetch the selected date or date range. Output is in the same format as input., Default: `""`
 * @param {string} [style=""] - Inline CSS for the input, Default: `""`
 * @param {string|''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Date picker input, Default: `""`
 * @param {boolean} [disabled=false] - Disables the component, Default: `false`
 * @param {string} [placeholder="Select Date.."] - Placeholder text for the input, Default: `"Select Date.."`
 * @param {string|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [calendar_color="primary"] - Colour of the Calendar, Default: `"primary"`
 * @param {any} [min_date=null] - Set earliest selectable date as an object or string
 *
 * **Example:** `"2021-06-06"` or `"(new Date('2021-01-01'))"`, Default: `null`
 * @param {any} [max_date=null] - Set latest selectable date as an object or string
 *
 * **Example:** `"2021-06-06"` or `"(new Date('2021-01-01'))"`, Default: `null`
 * @param {array} [enable_dates=[]] - Enables a range of dates and disables all others, Default: `[]`
 * @param {array} [disable_dates=[]] - Disables a range of dates and enables all others, Default: `[]`
 * @param {boolean} [range_mode=false] - Allows selecting a date range, Default: `false`
 * @param {object} [options={}] - Extended set of options as supported by Flatpicker
 *
 * See: https://flatpickr.js.org/options/, Default: `{}`
 * @param {string} [class=""] - CSS classes for the input, Default: `""`
 *
 * ### Events
 * - `dateChange` - Triggered when the date changes
 * - `monthChange` - Triggered when the Month changes
 * - `yearChange` - Triggered when the Year changes
 * - `ready` - Triggered when UI is ready
 * - `open` - Triggered when popup UI opens
 * - `close` - Triggered when popup UI closes
 * - `change` - Native input change event
 */
export default class Datepicker extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    disabled?: boolean;
    value?: string;
    options?: {};
    readonly?: boolean;
    placeholder?: string;
    calendar_color?: "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light";
    min_date?: any;
    max_date?: any;
    enable_dates?: any[];
    disable_dates?: any[];
    range_mode?: boolean;
}, {
    change: Event;
    dateChange: CustomEvent<any>;
    monthChange: CustomEvent<any>;
    yearChange: CustomEvent<any>;
    ready: CustomEvent<any>;
    open: CustomEvent<any>;
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DatepickerProps = typeof __propDef.props;
export type DatepickerEvents = typeof __propDef.events;
export type DatepickerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import("../internalTypes/type-defs").Colors;
        disabled?: boolean;
        value?: string;
        options?: {};
        readonly?: boolean;
        placeholder?: string;
        calendar_color?: "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light";
        min_date?: any;
        max_date?: any;
        enable_dates?: any[];
        disable_dates?: any[];
        range_mode?: boolean;
    };
    events: {
        change: Event;
        dateChange: CustomEvent<any>;
        monthChange: CustomEvent<any>;
        yearChange: CustomEvent<any>;
        ready: CustomEvent<any>;
        open: CustomEvent<any>;
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Datepicker.svelte.d.ts.map