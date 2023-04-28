/** @typedef {typeof __propDef.props}  DividerProps */
/** @typedef {typeof __propDef.events}  DividerEvents */
/** @typedef {typeof __propDef.slots}  DividerSlots */
/**
 * @param {string} [color=""] - Color of the Divider lines, Default: `""`
 * @param {boolean} [light=false] - Whether to display a lighter variant of the `color`, Default: `false`
 * @param {boolean} [vertical=false] - Whether to orient the Divider vertically. Vertical Divider take up the height of their parent., Default: `false`
 * @param {string|'center' | 'left' | 'right' | 'top' | 'bottom'} [alignment="center"] - Alignment of the Divider text. `top`/`left` and `bottom`/`right` are analogous for vertical Dividers, Default: `"center"`
 * @param {string} [style=""] - Inline CSS styles for the Divider, Default: `""`
 * @param {string} [class=""] - CSS class for Divider, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />` - Default slot for text inside Divider
 */
export default class Divider extends SvelteComponentTyped<{
    light?: boolean;
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    vertical?: boolean;
    alignment?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DividerProps = typeof __propDef.props;
export type DividerEvents = typeof __propDef.events;
export type DividerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        light?: boolean;
        style?: string;
        class?: string;
        color?: import('../internalTypes').ColorOptions;
        vertical?: boolean;
        alignment?: string | 'center' | 'left' | 'right' | 'top' | 'bottom';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Divider.svelte.d.ts.map