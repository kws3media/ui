/** @typedef {typeof __propDef.props}  DeleteButtonProps */
/** @typedef {typeof __propDef.events}  DeleteButtonEvents */
/** @typedef {typeof __propDef.slots}  DeleteButtonSlots */
/**
 * @param {string} [button_class=""] - CSS classes for the Delete button, Default: `""`
 * @param {string} [text="Delete"] - Button text, Default: `"Delete"`
 * @param {''|'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
 * @param {string} [icon="minus-circle"] - Name of the icon that is to be displayed in the button, Default: `"minus-circle"`
 * @param {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="danger"] - Color of the Button, Default: `"danger"`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
 * @param {string} [done_text="Deleted"] - Button text displayed after task is completed successfully, Default: `"Deleted"`
 * @param {object} [context=null] - Context property, Default: `null`
 * @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
 * @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
 * @param {number} [completion_timeout=600] - How long to wait before `erased` event is fired, and the UI state reverts back to normal, Default: `600`
 * @param {number} [error_timeout=3000] - How long to wait before `error` event is fired, and the UI state reverts back to normal, Default: `3000`
 * @param {string} [class=""] - CSS classes for the button container, Default: `""`
 *
 * ### Events
 * - `erase` - Fired when user confirms delete
 * - `erased` - Fired when deletion completes
 * - `error` - Fired when there is an error
 */
export default class DeleteButton extends SvelteComponentTyped<{
    icon?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    cy?: string;
    text?: string;
    button_class?: string;
    done_icon?: string;
    done_text?: string;
    icon_only?: boolean;
    disabled?: boolean;
    context?: any;
    completion_timeout?: number;
    error_timeout?: number;
}, {
    erase: CustomEvent<any>;
    erased: CustomEvent<any>;
    error: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DeleteButtonProps = typeof __propDef.props;
export type DeleteButtonEvents = typeof __propDef.events;
export type DeleteButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon?: string;
        class?: string;
        color?: import('../internalTypes').ColorOptions;
        size?: import('../internalTypes').SizeOptions;
        cy?: string;
        text?: string;
        button_class?: string;
        done_icon?: string;
        done_text?: string;
        icon_only?: boolean;
        disabled?: boolean;
        context?: any;
        completion_timeout?: number;
        error_timeout?: number;
    };
    events: {
        erase: CustomEvent<any>;
        erased: CustomEvent<any>;
        error: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=DeleteButton.svelte.d.ts.map