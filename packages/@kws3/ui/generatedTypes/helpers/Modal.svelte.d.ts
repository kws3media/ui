/** @typedef {typeof __propDef.props}  ModalProps */
/** @typedef {typeof __propDef.events}  ModalEvents */
/** @typedef {typeof __propDef.slots}  ModalSlots */
/**
 * @param {'small'|'medium'|'large'} [size="small"] - Size of the modal, Default: `"small"`
 * @param {boolean} [is_active=false] - Determines whether modal is displayed or not, Default: `false`
 * @param {boolean} [closable=true] - If this is set to false, the modal cannot be closed using the UI
 *
 * Only programmatic closing is possible, Default: `true`
 * @param {boolean} [close_on_click_outside=false] - Determines if a closable modal can be closed by clicking anywhere outside the modal, Default: `false`
 * @param {string} [style=""] - Inline CSS for modal container, Default: `""`
 * @param {string} [inner_style=""] - Inline CSS for modal content, Default: `""`
 * @param {string} [inner_class=""] - CSS classes for modal content, Default: `""`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [class=""] - CSS class for modal container, Default: `""`
 * @method `close()` - Call this method to close modal programmatically
 * @method `open()` - Call this method to open modal programmatically
 *
 * ### Slots
 * - `<slot name="default"  />` - Used for the Modal content
 */
export default class Modal extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    open?: () => void;
    close?: () => void;
    size?: import("../internalTypes/type-defs").Sizes;
    inner_class?: string;
    inner_style?: string;
    is_active?: boolean;
    closable?: boolean;
    close_on_click_outside?: boolean;
    cy?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
    get close(): () => void;
    get open(): () => void;
}
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        open?: () => void;
        close?: () => void;
        size?: import('../internalTypes').SizeOptions;
        inner_class?: string;
        inner_style?: string;
        is_active?: boolean;
        closable?: boolean;
        close_on_click_outside?: boolean;
        cy?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Modal.svelte.d.ts.map