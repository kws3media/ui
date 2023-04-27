/** @typedef {typeof __propDef.props}  ScrollableListProps */
/** @typedef {typeof __propDef.events}  ScrollableListEvents */
/** @typedef {typeof __propDef.slots}  ScrollableListSlots */
/**
 * @param {array} [items=[]] - Array of items, Default: `[]`
 * @param {string} [height="100%"] - Height of the wrapper, CSS String, Default: `"100%"`
 * @param {number | null} [item_height=null] - Height of each list item. If not set, height will be calculated automatically based on each item's offsetHeight, Default: `null`
 * @param {number} [start=0] - First item index rendered inside viewport - readonly, Default: `0`
 * @param {number} [end=0] - Last item index rendered inside viewport - readonly, Default: `0`
 * @param {number} [end_threshold=10] - `end` event will be fired when the list reaches this many items before the end of the list., Default: `10`
 * @param {number} [padding_threshold=5] - render 'n' number of items on outside the viewport (top and bottom) to avoid visible glitches on scrolling., Default: `5`
 * @param {string} [style=""] - Inline CSS for scroller container, Default: `""`
 * @param {string} [class=""] - CSS classes for scroller container, Default: `""`
 *
 * ### Events
 * - `end` - Fired when the list reaches `end_threshold` items before the end of the list.
 *
 * ### Slots
 * - `<slot name="default" {item} {index} />` - Default slot for list view items
 * - `<slot name="loader"  />` - Optional slot to display a loading graphic at the bottom of the list
 * while more items are loading
 */
export default class ScrollableList extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    height?: string;
    end?: number;
    items?: any[];
    item_height?: number;
    start?: number;
    end_threshold?: number;
    padding_threshold?: number;
}, {
    end: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        item: any;
        index: number;
    };
    loader: {};
}> {
}
export type ScrollableListProps = typeof __propDef.props;
export type ScrollableListEvents = typeof __propDef.events;
export type ScrollableListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        height?: string;
        end?: number;
        items?: any[];
        item_height?: number | null;
        start?: number;
        end_threshold?: number;
        padding_threshold?: number;
    };
    events: {
        end: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: any;
            index: number;
        };
        loader: {};
    };
};
export {};
//# sourceMappingURL=ScrollableList.svelte.d.ts.map