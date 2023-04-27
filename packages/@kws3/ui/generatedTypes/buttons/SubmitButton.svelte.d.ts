/** @typedef {typeof __propDef.props}  SubmitButtonProps */
/** @typedef {typeof __propDef.events}  SubmitButtonEvents */
/** @typedef {typeof __propDef.slots}  SubmitButtonSlots */
/**
 * @param {''|'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
 * @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Color of the Button, Default: `"primary"`
 * @param {string} [text="Save Changes"] - Button text, Default: `"Save Changes"`
 * @param {string} [saved_text="Saved"] - Text displayed after submission is completed successfully, Default: `"Saved"`
 * @param {string} [error_text="Failed to Save"] - Text displayed if submission is not successful, Default: `"Failed to Save"`
 * @param {string} [icon="save"] - Name of the icon that is to be displayed in the button, Default: `"save"`
 * @param {string} [cy="submit"] - data-cy attribute for cypress, Default: `"submit"`
 * @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
 * @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
 * @param {object} [tracker={}] - Tracker object to be sent from outside to change the state of the button., Default: `{}`
 * @param {number} [completion_timeout=600] - How long to wait before `saved` event is fired, and the UI state reverts back to normal, Default: `600`
 * @param {number} [error_timeout=3000] - How long to wait before `error` event is fired, and the UI state reverts back to normal, Default: `3000`
 * @param {string} [class=""] - CSS classes for Button container, Default: `""`
 * @method `saving()` - call this method on form saving state
 * @method `saved(callback, timeout)` - call this method after form saved
 * @method `error(callback, timeout)` - call this method on form error state
 *
 * ### Events
 * - `saved` - Fired on successful submission
 * - `error` - Fired when there is an error
 */
export default class SubmitButton extends SvelteComponentTyped<{
    icon?: string;
    class?: string;
    color?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
    size?: import("../internalTypes/type-defs").Sizes;
    cy?: string;
    text?: string;
    error?: (callback: any, timeout?: number) => void;
    icon_only?: boolean;
    disabled?: boolean;
    completion_timeout?: number;
    error_timeout?: number;
    saved_text?: string;
    error_text?: string;
    tracker?: {
        saving: boolean;
        saved: boolean;
        error: boolean;
    };
    saving?: () => void;
    saved?: (callback: any, timeout?: number) => void;
}, {
    saved: CustomEvent<any>;
    error: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get saving(): () => void;
    get saved(): (callback: any, timeout?: number) => void;
    get error(): (callback: any, timeout?: number) => void;
}
export type SubmitButtonProps = typeof __propDef.props;
export type SubmitButtonEvents = typeof __propDef.events;
export type SubmitButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon?: string;
        class?: string;
        color?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
        size?: import("../internalTypes/type-defs").Sizes;
        cy?: string;
        text?: string;
        error?: (callback: any, timeout?: number) => void;
        icon_only?: boolean;
        disabled?: boolean;
        completion_timeout?: number;
        error_timeout?: number;
        saved_text?: string;
        error_text?: string;
        tracker?: {
            saving: boolean;
            saved: boolean;
            error: boolean;
        };
        saving?: () => void;
        saved?: (callback: any, timeout?: number) => void;
    };
    events: {
        saved: CustomEvent<any>;
        error: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=SubmitButton.svelte.d.ts.map