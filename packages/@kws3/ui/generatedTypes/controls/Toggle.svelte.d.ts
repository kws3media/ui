/** @typedef {typeof __propDef.props}  ToggleProps */
/** @typedef {typeof __propDef.events}  ToggleEvents */
/** @typedef {typeof __propDef.slots}  ToggleSlots */
/**
 * @param {boolean} [on=false] - Current value of the Toggle
 *
 * This property can be bound to, to fetch the current value, Default: `false`
 * @param {boolean} [disabled=false] - Disables the Toggle, Default: `false`
 * @param {ColorOptions} [color=] - Color of the Toggle, Default: ``
 * @param {string} [on_text=""] - Text displayed on the Toggle when ON, Default: `""`
 * @param {string} [off_text=""] - Text displayed on the Toggle when OFF, Default: `""`
 * @param {SizeOptions} [size=] - Size of the Toggle, Default: ``
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [class=""] - CSS classes for the Toggle, Default: `""`
 *
 * ### Events
 * - `change` - Fires an event on change of Toggle state
 */
export default class Toggle extends SvelteComponentTyped<{
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    cy?: string;
    disabled?: boolean;
    on?: boolean;
    on_text?: string;
    off_text?: string;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ToggleProps = typeof __propDef.props;
export type ToggleEvents = typeof __propDef.events;
export type ToggleSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        color?: import("../internalTypes/type-defs").Colors;
        size?: import("../internalTypes/type-defs").Sizes;
        cy?: string;
        disabled?: boolean;
        on?: boolean;
        on_text?: string;
        off_text?: string;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Toggle.svelte.d.ts.map