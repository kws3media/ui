/** @typedef {typeof __propDef.props}  PanelProps */
/** @typedef {typeof __propDef.events}  PanelEvents */
/** @typedef {typeof __propDef.slots}  PanelSlots */
/**
 * @param {string} [title=""] - Title of the panel
 *
 * Having content here will display the title bar, even if has_title is false, Default: `""`
 * @param {string} [subtitle=""] - Subtitle of the panel
 *
 * This will not display if there is no title area, Default: `""`
 * @param {string} [style=""] - Inline CSS for Panel container, Default: `""`
 * @param {string} [inner_class=""] - CSS classes for Panel content, Default: `""`
 * @param {string} [inner_style=""] - Inline CSS for Panel content, Default: `""`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [collapse_icon="caret-right"] - Icon indicating whether Panel is collapsible
 *
 * This will not display if there is no title area, Default: `"caret-right"`
 * @param {boolean} [collapsible=false] - Determines whether panel is collapsible
 *
 * This will not work if there is no title area, Default: `false`
 * @param {boolean} [collapsed=false] - Determines whether Panel is currently collapsed or not, Default: `false`
 * @param {boolean} [relative=false] - Indicates whether the Panel has `position: relative` or not
 *
 * You might need this if there are absolutely positioned elements inside the Panel, Default: `false`
 * @param {boolean} [has_toolbar=true] - Used to show or hide toolbar slot contents (slot=“toolbar”), Default: `true`
 * @param {boolean} [has_center=true] - Used to show or hide center slot contents of the title area (slot=“center”), Default: `true`
 * @param {boolean} [has_title=false] - Determines whether to show title bar when no title content is present, Default: `false`
 * @param {string} [class=""] - CSS classes for Panel container, Default: `""`
 *
 * ### Slots
 * - `<slot name="center"  />` - Used for center aligned title content
 *
 * This will not work if there is no title area
 * - `<slot name="toolbar"  />` - Used for right aligned toolbars
 *
 * This will not work if there is no title area
 * - `<slot name="default"  />` - Used for panel content
 */
export default class Panel extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    inner_class?: string;
    inner_style?: string;
    title?: string;
    has_title?: boolean;
    cy?: string;
    subtitle?: string;
    collapse_icon?: string;
    collapsible?: boolean;
    collapsed?: boolean;
    relative?: boolean;
    has_toolbar?: boolean;
    has_center?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    center: {};
    toolbar: {};
    default: {};
}> {
}
export type PanelProps = typeof __propDef.props;
export type PanelEvents = typeof __propDef.events;
export type PanelSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        inner_class?: string;
        inner_style?: string;
        title?: string;
        has_title?: boolean;
        cy?: string;
        subtitle?: string;
        collapse_icon?: string;
        collapsible?: boolean;
        collapsed?: boolean;
        relative?: boolean;
        has_toolbar?: boolean;
        has_center?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        center: {};
        toolbar: {};
        default: {};
    };
};
export {};
//# sourceMappingURL=Panel.svelte.d.ts.map