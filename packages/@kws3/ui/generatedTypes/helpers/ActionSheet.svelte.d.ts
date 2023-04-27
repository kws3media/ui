/** @typedef {typeof __propDef.props}  ActionSheetProps */
/** @typedef {typeof __propDef.events}  ActionSheetEvents */
/** @typedef {typeof __propDef.slots}  ActionSheetSlots */
/**
 * @param {boolean} [is_active=false] - Determines whether the ActionSheet is open or closed, Default: `false`
 * @param {boolean} [closable=true] - Determines whether the ActionSheet is closable
 *
 * If `false` , the component won't have a close button, and will not close on clicking outside the component, Default: `true`
 * @param {boolean} [close_on_click_outside=false] - Determines if the ActionSheet can be closed by clicking anywhere outside the component
 *
 * `closable` needs to be `true` for this to work, Default: `false`
 * @param {string} [style=""] - Inline CSS for the ActionSheet, Default: `""`
 * @param {string} [inner_style=""] - Inline CSS for ActionSheet content, Default: `""`
 * @param {string} [inner_class=""] - CSS classes for ActionSheet content, Default: `""`
 * @param {string} [class=""] - CSS classes for the ActionSheet, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />` - Used to display sheet content
 */
export default class ActionSheet extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    inner_class?: string;
    inner_style?: string;
    is_active?: boolean;
    closable?: boolean;
    close_on_click_outside?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ActionSheetProps = typeof __propDef.props;
export type ActionSheetEvents = typeof __propDef.events;
export type ActionSheetSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        inner_class?: string;
        inner_style?: string;
        is_active?: boolean;
        closable?: boolean;
        close_on_click_outside?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=ActionSheet.svelte.d.ts.map