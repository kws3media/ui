/** @typedef {typeof __propDef.props}  SlidingPaneProps */
/** @typedef {typeof __propDef.events}  SlidingPaneEvents */
/** @typedef {typeof __propDef.slots}  SlidingPaneSlots */
/**
 * @param {boolean} [active=false] - Used to set the active pane, Default: `false`
 * @param {string} [style=""] - Inline CSS of component, Default: `""`
 * @param {boolean} [v_center=true] - Vertical alignment of content inside the active pane., Default: `true`
 * @param {boolean} [h_center=true] - Horizontal alignment of content inside the active pane., Default: `true`
 * @param {boolean} [track_height=true] - If this is set to `false`, the height of the panel will not change based on the pane height, Default: `true`
 * @param {string} [class=""] - CSS classes for the panel, Default: `""`
 *
 * ### Events
 * - `heightChange` - Event fired when the height of the pane changes
 *
 * This will work only when `track_height` is set to `true`
 *
 * ### Slots
 * - `<slot name="default"  />` - Used to display content
 */
export default class SlidingPane extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    active?: boolean;
    v_center?: boolean;
    h_center?: boolean;
    track_height?: boolean;
}, {
    heightChange: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SlidingPaneProps = typeof __propDef.props;
export type SlidingPaneEvents = typeof __propDef.events;
export type SlidingPaneSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        active?: boolean;
        v_center?: boolean;
        h_center?: boolean;
        track_height?: boolean;
    };
    events: {
        heightChange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=SlidingPane.svelte.d.ts.map