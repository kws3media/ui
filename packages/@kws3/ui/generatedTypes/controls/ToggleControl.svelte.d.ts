/** @typedef {typeof __propDef.props}  ToggleControlProps */
/** @typedef {typeof __propDef.events}  ToggleControlEvents */
/** @typedef {typeof __propDef.slots}  ToggleControlSlots */
/**
 * @param {string} [style=""] - Inline css for ToggleControl, Default: `""`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [class=""] - CSS classes for ToggleControl, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />`
 */
export default class ToggleControl extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    cy?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ToggleControlProps = typeof __propDef.props;
export type ToggleControlEvents = typeof __propDef.events;
export type ToggleControlSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        cy?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=ToggleControl.svelte.d.ts.map