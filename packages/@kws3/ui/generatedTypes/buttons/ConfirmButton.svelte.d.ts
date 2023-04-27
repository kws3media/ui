/** @typedef {typeof __propDef.props}  ConfirmButtonProps */
/** @typedef {typeof __propDef.events}  ConfirmButtonEvents */
/** @typedef {typeof __propDef.slots}  ConfirmButtonSlots */
/**
 * @param {string} [button_class=""] - CSS classes for the Confirm button, Default: `""`
 * @param {string} [text=""] - Button text, Default: `""`
 * @param {''|'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
 * @param {string} [icon="check"] - Name of the icon that is to be displayed in the button, Default: `"check"`
 * @param {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="primary"] - Color of the Button, Default: `"primary"`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
 * @param {string} [done_text="Done"] - Button text displayed after task is completed successfully, Default: `"Done"`
 * @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
 * @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
 * @param {boolean} [should_confirm=true] - When `false`, skips the confirmation prompt, and makes it a one step process, Default: `true`
 * @param {string} [context=""] - Context property, Default: `""`
 * @param {number} [completion_timeout=600] - How long to wait before `done` event is fired, and the UI state reverts back to normal, Default: `600`
 * @param {number} [error_timeout=3000] - How long to wait before `error` event is fired, and the UI state reverts back to normal, Default: `3000`
 * @param {string} [class=""] - CSS classes for button container, Default: `""`
 *
 * ### Events
 * - `do` - Fired when user confirms action. Or in case of `should_confirm` set at `false`, event is fired when user clicks button.
 * - `done` - Fired when task completes
 * - `error` - Fired when there is an error
 */
export default class ConfirmButton extends SvelteComponentTyped<{
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
    should_confirm?: boolean;
    context?: string;
    completion_timeout?: number;
    error_timeout?: number;
}, {
    do: CustomEvent<any>;
    done: CustomEvent<any>;
    error: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ConfirmButtonProps = typeof __propDef.props;
export type ConfirmButtonEvents = typeof __propDef.events;
export type ConfirmButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
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
        should_confirm?: boolean;
        context?: string;
        completion_timeout?: number;
        error_timeout?: number;
    };
    events: {
        do: CustomEvent<any>;
        done: CustomEvent<any>;
        error: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=ConfirmButton.svelte.d.ts.map