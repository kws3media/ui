/** @typedef {typeof __propDef.props}  ProcessButtonProps */
/** @typedef {typeof __propDef.events}  ProcessButtonEvents */
/** @typedef {typeof __propDef.slots}  ProcessButtonSlots */
/**
 * @param {string} [button_class=""] - CSS classes for the Process button, Default: `""`
 * @param {string} [text="Click Me"] - Button text, Default: `"Click Me"`
 * @param {string} [size=""] - Size of the Button, Default: `""`
 * @param {string} [icon="check"] - Name of the icon that is to be displayed in the button, Default: `"check"`
 * @param {string} [color="primary"] - Color of the Button, Default: `"primary"`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
 * @param {string} [done_text="Done"] - Button text displayed after task is completed successfully, Default: `"Done"`
 * @param {string} [context=""] - Context property, Default: `""`
 * @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
 * @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
 * @param {number} [completion_timeout=600] - How long to wait before `done` event is fired, and the UI state reverts back to normal, Default: `600`
 * @param {number} [error_timeout=3000] - How long to wait before `error` event is fired, and the UI state reverts back to normal, Default: `3000`
 * @param {string} [class=""] - CSS classes for button container, Default: `""`
 *
 * ### Events
 * - `do` - Fired when user presses button
 * - `done` - Fired when task completes successfully
 * - `error` - Fired when there is an error
 */
export default class ProcessButton extends SvelteComponentTyped<{
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
export type ProcessButtonProps = typeof __propDef.props;
export type ProcessButtonEvents = typeof __propDef.events;
export type ProcessButtonSlots = typeof __propDef.slots;
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
//# sourceMappingURL=ProcessButton.svelte.d.ts.map