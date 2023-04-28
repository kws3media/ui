/** @typedef {typeof __propDef.props}  CardModalProps */
/** @typedef {typeof __propDef.events}  CardModalEvents */
/** @typedef {typeof __propDef.slots}  CardModalSlots */
/**
 * @param {string} [title=""] - Title of the modal, Default: `""`
 * @param {string} [size="small"] - Size of the modal, Default: `"small"`
 * @param {boolean} [is_active=false] - Determines whether modal is displayed or not, Default: `false`
 * @param {boolean} [closable=true] - If this is set to false, the modal cannot be closed using the UI
 *
 * Only programmatic closing is possible, Default: `true`
 * @param {boolean} [close_on_click_outside=false] - Determines if a closable modal can be closed by clicking anywhere outside the modal, Default: `false`
 * @param {boolean} [has_footer=true] - Determines if modal has footer space, Default: `true`
 * @param {string} [style=""] - Inline CSS for modal container, Default: `""`
 * @param {string} [inner_style=""] - Inline CSS for modal content, Default: `""`
 * @param {string} [inner_class=""] - CSS classes for the modal content, Default: `""`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [class=""] - CSS classes for modal, Default: `""`
 *
 * ### Slots
 * - `<slot name="title"  />` - Used for the title of Modal
 *
 * This can be used instead of the `title`
 * property, to send a `HTMLElement` in,
 * instead of just plain text
 * - `<slot name="default"  />` - Used for the Modal content
 * - `<slot name="footer"  />` - Used for the footer of Modal
 *
 * Only visible when the
 * `has_footer` property is `true`
 */
export default class CardModal extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    size?: import("../internalTypes/type-defs").Sizes;
    inner_class?: string;
    inner_style?: string;
    title?: string;
    is_active?: boolean;
    closable?: boolean;
    close_on_click_outside?: boolean;
    cy?: string;
    has_footer?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    default: {};
    footer: {};
}> {
}
export type CardModalProps = typeof __propDef.props;
export type CardModalEvents = typeof __propDef.events;
export type CardModalSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        size?: import('../internalTypes').SizeOptions;
        inner_class?: string;
        inner_style?: string;
        title?: string;
        is_active?: boolean;
        closable?: boolean;
        close_on_click_outside?: boolean;
        cy?: string;
        has_footer?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
        footer: {};
    };
};
export {};
//# sourceMappingURL=CardModal.svelte.d.ts.map