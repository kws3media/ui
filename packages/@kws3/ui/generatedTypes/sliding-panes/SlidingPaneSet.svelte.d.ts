/** @typedef {typeof __propDef.props}  SlidingPaneSetProps */
/** @typedef {typeof __propDef.events}  SlidingPaneSetEvents */
/** @typedef {typeof __propDef.slots}  SlidingPaneSetSlots */
/**
 * @param {string} [style=""] - Inline style of component, Default: `""`
 * @param {boolean} [vertical=false] - Vertical transform of SlidingPane., Default: `false`
 * @param {string} [class=""] - CSS classes for the SlidingPaneSet, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />`
 */
export default class SlidingPaneSet extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    vertical?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SlidingPaneSetProps = typeof __propDef.props;
export type SlidingPaneSetEvents = typeof __propDef.events;
export type SlidingPaneSetSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        vertical?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=SlidingPaneSet.svelte.d.ts.map