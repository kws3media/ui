/** @typedef {typeof __propDef.props}  TimepickerProps */
/** @typedef {typeof __propDef.events}  TimepickerEvents */
/** @typedef {typeof __propDef.slots}  TimepickerSlots */
/**
 * @param {string} [value=""] - Accepts a date value in the format `H:i`
 *
 * Where `H` is in 24hr format
 *
 * This property can be bound to, to fetch the selected time. Output is in the same format as input., Default: `""`
 * @param {string} [style=""] - Inline CSS for the input, Default: `""`
 * @param {ColorOptions} [color=] - Colour of the Time picker input, Default: ``
 * @param {boolean} [disabled=false] - Disables the component, Default: `false`
 * @param {string} [placeholder="Select Time.."] - Placeholder text for the input, Default: `"Select Time.."`
 * @param {Exclude<ColorOptions, ''>} [ui_color=primary] - Colour of popup time selection UI, Default: `primary`
 * @param {boolean} [time_24hr=false] - Display time selection UI in 24hr format, Default: `false`
 * @param {any} [min_time=null] - Set earliest selectable time as string
 *
 * **Example:** `"01:00 PM"` or "13:00"`, Default: `null`
 * @param {any} [max_time=null] - Set latest selectable time as string
 *
 * **Example:** `"03:00 PM"` or "15:00"`, Default: `null`
 * @param {object} [options={}] - Extended set of options as supported by Flatpicker
 *
 * See: https://flatpickr.js.org/options/, Default: `{}`
 * @param {boolean} [readonly=false] - Make input value read-only, Default: `false`
 * @param {string} [class=""] - CSS classes for the input, Default: `""`
 *
 * ### Events
 * - `timeChange` - Triggered when time changes
 * - `ready` - Triggered when UI is ready
 * - `open` - Triggered when popup UI opens
 * - `close` - Triggered when popup UI closes
 * - `change` - Native input change event
 */
export default class Timepicker extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    disabled?: boolean;
    value?: string;
    options?: {};
    readonly?: boolean;
    placeholder?: string;
    time_24hr?: boolean;
    ui_color?: "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light";
    min_time?: any;
    max_time?: any;
}, {
    change: Event;
    timeChange: CustomEvent<any>;
    ready: CustomEvent<any>;
    open: CustomEvent<any>;
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TimepickerProps = typeof __propDef.props;
export type TimepickerEvents = typeof __propDef.events;
export type TimepickerSlots = typeof __propDef.slots;
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
        time_24hr?: boolean;
        ui_color?: "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light";
        min_time?: any;
        max_time?: any;
    };
    events: {
        change: Event;
        timeChange: CustomEvent<any>;
        ready: CustomEvent<any>;
        open: CustomEvent<any>;
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Timepicker.svelte.d.ts.map