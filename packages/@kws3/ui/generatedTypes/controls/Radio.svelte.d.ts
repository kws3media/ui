/** @typedef {typeof __propDef.props}  RadioProps */
/** @typedef {typeof __propDef.events}  RadioEvents */
/** @typedef {typeof __propDef.slots}  RadioSlots */
/**
 * @param {object} [value=null] - Value of radio button, Default: `null`
 * @param {string} [style=""] - Inline CSS for the Radio button, Default: `""`
 * @param {string} [label_style=""] - Inline CSS for Radio label, Default: `""`
 * @param {''|'small'|'medium'|'large'} [size=""] - Size of the Radio Button, Default: `""`
 * @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the Radio button when selected, Default: `""`
 * @param {boolean} [inverted=false] - Inverts the Radio colour theme, Default: `false`
 * @param {boolean} [circle=false] - Circular Radio button instead of the default square, Default: `false`
 * @param {boolean} [disabled=false] - Disables Radio button, Default: `false`
 * @param {any} [group=null] - This is the property to bind to,
 * so that the selected Radio's value can be obtained
 *
 * See: https://svelte.dev/docs#bind_group, Default: `null`
 * @param {string} [class=""] - CSS classes for the Radio button, Default: `""`
 *
 * ### Events
 * - `change` - Radio button change event
 *
 * ### Slots
 * - `<slot name="default"  />` - Used for Radio Label, which can be further styled using `label_style` property
 */
export default class Radio extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    circle?: boolean;
    disabled?: boolean;
    inverted?: boolean;
    label_style?: string;
    value?: any;
    group?: any;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import("../internalTypes/type-defs").Colors;
        size?: import("../internalTypes/type-defs").Sizes;
        circle?: boolean;
        disabled?: boolean;
        inverted?: boolean;
        label_style?: string;
        value?: any;
        group?: any;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Radio.svelte.d.ts.map