/** @typedef {typeof __propDef.props}  TimelineItemProps */
/** @typedef {typeof __propDef.events}  TimelineItemEvents */
/** @typedef {typeof __propDef.slots}  TimelineItemSlots */
/**
 * @param {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="primary"] - Color of marker and border, Default: `"primary"`
 * @param {string} [marker_icon=""] - Any icon name accepted by the Icon component, icon will be placed inside the marker, Default: `"null"`
 * @param {string} [marker_image=""] - Any image URL, the image will be placed inside the marker, Default: `"null"`
 * @param {string} [class=""] - CSS classes for the TimelineItem container, Default: `""`
 *
 * ### Slots
 * - `<slot name="above"  />` - Optional text to be displayed above the main text
 * - `<slot name="default"  />` - Default slot containing the main text
 * - `<slot name="below"  />` - Optional text to be displayed below the main text
 * - `<slot name="thumbnail"  />` - Optional thumbnail image do be displayed next to the main content
 */
export default class TimelineItem extends SvelteComponentTyped<{
    class?: string;
    color?: import("../../internalTypes/type-defs").Colors;
    marker_icon?: string;
    marker_image?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    above: {};
    default: {};
    below: {};
    thumbnail: {};
}> {
}
export type TimelineItemProps = typeof __propDef.props;
export type TimelineItemEvents = typeof __propDef.events;
export type TimelineItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        color?: import('../../internalTypes').ColorOptions;
        marker_icon?: string;
        marker_image?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        above: {};
        default: {};
        below: {};
        thumbnail: {};
    };
};
export {};
//# sourceMappingURL=TimelineItem.svelte.d.ts.map