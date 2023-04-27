/** @typedef {typeof __propDef.props}  TimelineHeaderProps */
/** @typedef {typeof __propDef.events}  TimelineHeaderEvents */
/** @typedef {typeof __propDef.slots}  TimelineHeaderSlots */
/**
 * @param {string} [class=""] - CSS classes for the TimelineItem container, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />` - Content of the header, recommended to wrap with a `.tag` element.
 */
export default class TimelineHeader extends SvelteComponentTyped<{
    class?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TimelineHeaderProps = typeof __propDef.props;
export type TimelineHeaderEvents = typeof __propDef.events;
export type TimelineHeaderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=TimelineHeader.svelte.d.ts.map