/** @typedef {typeof __propDef.props}  NumberInputProps */
/** @typedef {typeof __propDef.events}  NumberInputEvents */
/** @typedef {typeof __propDef.slots}  NumberInputSlots */
/**
 * @param {''|'small'|'medium'|'large'} [size=""] - Size of the component, Default: `""`
 * @param {number} [value=0] - Current value
 *
 * This property can be bound to, to fetch the current value
 *
 * This will be overridden if `min` is higher, or `max` is lower, Default: `0`
 * @param {number} [step=1] - Number of steps to jump when increasing/decreasing using the +/- buttons, Default: `1`
 * @param {number} [min=0] - Minumum permitted value, Default: `0`
 * @param {number} [max=100] - Maximum permitted value, Default: `100`
 * @param {boolean} [disabled=false] - Disables the NumberInput, Default: `false`
 * @param {boolean} [fullwidth=false] - Forces the NumberInput to occupy the full width of it's container, Default: `false`
 * @param {boolean} [typeable=true] - Allows typing the value into the input, Default: `true`
 * @param {string} [minus_icon="minus"] - Name of the icon that is to be displayed in the minus button, Default: `"minus"`
 * @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_icon_color="danger"] - Color of the Minus Icon, Default: `"danger"`
 * @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_button_color=""] - Color of the Minus Button, Default: `""`
 * @param {string} [plus_icon="plus"] - Name of the icon that is to be displayed in the plus button, Default: `"plus"`
 * @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_icon_color="success"] - Color of the Plus Icon, Default: `"success"`
 * @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_button_color=""] - Color of the Plus Button, Default: `""`
 * @param {boolean} [input_only=false] - Show input without controls, Default: `false`
 * @param {boolean} [force_integer=false] - Prevent decimal numbers such as `1.5`, Default: `false`
 * @param {string} [style=""] - Inline CSS for component, Default: `""`
 * @param {string} [class=""] - CSS classes for component, Default: `""`
 *
 * ### Events
 * - `change` - Triggered when value changes
 * - `blur`
 * - `focus`
 */
export default class NumberInput extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    size?: import("../internalTypes/type-defs").Sizes;
    disabled?: boolean;
    max?: number;
    value?: number;
    step?: number;
    min?: number;
    fullwidth?: boolean;
    typeable?: boolean;
    minus_icon?: string;
    minus_icon_color?: import("../internalTypes/type-defs").Colors;
    minus_button_color?: import("../internalTypes/type-defs").Colors;
    plus_icon?: string;
    plus_icon_color?: import("../internalTypes/type-defs").Colors;
    plus_button_color?: import("../internalTypes/type-defs").Colors;
    input_only?: boolean;
    force_integer?: boolean;
}, {
    blur: FocusEvent;
    focus: FocusEvent;
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NumberInputProps = typeof __propDef.props;
export type NumberInputEvents = typeof __propDef.events;
export type NumberInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        size?: import("../internalTypes/type-defs").Sizes;
        disabled?: boolean;
        max?: number;
        value?: number;
        step?: number;
        min?: number;
        fullwidth?: boolean;
        typeable?: boolean;
        minus_icon?: string;
        minus_icon_color?: import("../internalTypes/type-defs").Colors;
        minus_button_color?: import("../internalTypes/type-defs").Colors;
        plus_icon?: string;
        plus_icon_color?: import("../internalTypes/type-defs").Colors;
        plus_button_color?: import("../internalTypes/type-defs").Colors;
        input_only?: boolean;
        force_integer?: boolean;
    };
    events: {
        blur: FocusEvent;
        focus: FocusEvent;
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {}; /**
         * Disables the NumberInput
         */
};
export {};
//# sourceMappingURL=NumberInput.svelte.d.ts.map