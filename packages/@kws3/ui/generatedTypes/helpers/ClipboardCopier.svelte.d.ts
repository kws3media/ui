/** @typedef {typeof __propDef.props}  ClipboardCopierProps */
/** @typedef {typeof __propDef.events}  ClipboardCopierEvents */
/** @typedef {typeof __propDef.slots}  ClipboardCopierSlots */
/**
 * @param {string} [text="Copy to clipboard"] - Default tooltip text, Default: `"Copy to clipboard"`
 * @param {string} [icon="copy"] - Icon to be used as the copy button, Default: `"copy"`
 * @param {string} [copied_text="Copied!"] - Tooltip displayed after a succesful copy operation, Default: `"Copied!"`
 * @param {string} [copied_icon="check"] - Icon displayed on successful copy operation, Default: `"check"`
 * @param {string} [copy=""] - Text to be copied into clipboard, Default: `""`
 * @param {boolean} [copied=false] - Determines if the copy operation has taken place, Default: `false`
 * @param {string} [copied_icon_color="success"] - Colour of the `copied_icon` after a succesful copy operation
 *
 * If `''` is selected, Icon will not change colour after copying, Default: `"success"`
 * @param {string} [class=""] - CSS classes for the whole component, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />` - Description label displayed before copy icon
 */
export default class ClipboardCopier extends SvelteComponentTyped<{
    icon?: string;
    class?: string;
    text?: string;
    copy?: string;
    copied_text?: string;
    copied_icon?: string;
    copied?: boolean;
    copied_icon_color?: import("../internalTypes/type-defs").Colors;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ClipboardCopierProps = typeof __propDef.props;
export type ClipboardCopierEvents = typeof __propDef.events;
export type ClipboardCopierSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon?: string;
        class?: string;
        text?: string;
        copy?: string;
        copied_text?: string;
        copied_icon?: string;
        copied?: boolean;
        copied_icon_color?: import('../internalTypes').ColorOptions;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=ClipboardCopier.svelte.d.ts.map