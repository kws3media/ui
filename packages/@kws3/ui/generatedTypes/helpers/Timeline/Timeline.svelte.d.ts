/** @typedef {typeof __propDef.props}  TimelineProps */
/** @typedef {typeof __propDef.events}  TimelineEvents */
/** @typedef {typeof __propDef.slots}  TimelineSlots */
/**
 * @param {string|'left'|'center'|'right'} [align="left"] - Alignment of the Timeline child items, Default: `"left"`
 * @param {string} [class=""] - CSS classes for the Timeline container, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />` - Default slot for placing all TimelineItem and TimelineHeader components
 */
export default class Timeline extends SvelteComponentTyped<{
    class?: string;
    align?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TimelineProps = typeof __propDef.props;
export type TimelineEvents = typeof __propDef.events;
export type TimelineSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        align?: string | 'left' | 'center' | 'right';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Timeline.svelte.d.ts.map