/** @typedef {typeof __propDef.props}  RangeSliderProps */
/** @typedef {typeof __propDef.events}  RangeSliderEvents */
/** @typedef {typeof __propDef.slots}  RangeSliderSlots */
/**
 * @param {number} [min=0] - Minumum permitted value, Default: `0`
 * @param {number} [max=100] - Maximum permitted value, Default: `100`
 * @param {number} [step=1] - Stepping interval or Rate of change of value, Default: `1`
 * @param {number} [value=0] - Current value
 *
 * This property can be bound to, to fetch the current value
 *
 * This will be overridden if `min` is higher, or `max` is lower, Default: `0`
 * @param {boolean} [output=false] - Displays the current value, Default: `false`
 * @param {boolean} [disabled=false] - Disables the Slider, Default: `false`
 * @param {''|'small'|'medium'|'large'} [size=""] - Size of the Slider, Default: `""`
 * @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Slider, Default: `""`
 * @param {string} [style=""] - Inline CSS for the Slider, Default: `""`
 * @param {boolean} [circle=false] - Uses a round slider thumb instead of the default square, Default: `false`
 * @param {boolean} [tooltip=false] - Displays the current value of the Slider as a tooltip
 *
 * `output` has to be enabled for this to work, Default: `false`
 * @param {string} [class=""] - CSS classes for the slider, Default: `""`
 *
 * ### Events
 * - `change` - Native input change event
 * - `input` - Native input event
 */
export default class RangeSlider extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    circle?: boolean;
    output?: boolean;
    disabled?: boolean;
    max?: number;
    value?: number;
    step?: number;
    min?: number;
    tooltip?: boolean;
}, {
    change: Event;
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RangeSliderProps = typeof __propDef.props;
export type RangeSliderEvents = typeof __propDef.events;
export type RangeSliderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import("../internalTypes/type-defs").Colors;
        size?: import("../internalTypes/type-defs").Sizes;
        circle?: boolean;
        output?: boolean;
        disabled?: boolean;
        max?: number;
        value?: number;
        step?: number;
        min?: number;
        tooltip?: boolean;
    };
    events: {
        change: Event;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=RangeSlider.svelte.d.ts.map