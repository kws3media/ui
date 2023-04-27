/** @typedef {typeof __propDef.props}  MessageProps */
/** @typedef {typeof __propDef.events}  MessageEvents */
/** @typedef {typeof __propDef.slots}  MessageSlots */
/**
 * @param {''|'small'|'medium'|'large'} [size=""] - Size of the Message, Default: `""`
 * @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="info"] - Color of the Message box, Default: `"info"`
 * @param {string} [style=""] - Inline CSS for Message box, Default: `""`
 * @param {string} [inner_style=""] - Inline CSS for Message content, Default: `""`
 * @param {string} [title_class=""] - CSS classes for Message box title, Default: `""`
 * @param {string} [inner_class=""] - CSS classes for Message content, Default: `""`
 * @param {string} [title=""] - Title of the message box
 *
 * Having content here will display the title bar and content, even if has_title is false, Default: `""`
 * @param {boolean} [has_title=false] - Determines whether to show title bar when no title content is present, Default: `false`
 * @param {boolean} [dismissable=false] - Determines whether close button is displayed or not, Default: `false`
 * @param {boolean} [active=true] - Determines whether the whole component is being displayed or not, Default: `true`
 * @param {string} [class=""] - CSS classes for Message box, Default: `""`
 *
 * ### Events
 * - `dismiss` - Fired when dismiss button is clicked.
 * Turns `active` off, which hides the component.
 * The parent can then decide what to do with the component
 *
 * ### Slots
 * - `<slot name="title"  />` - Used for message title.<br/>
 * **Example:** <code>&lt;h1 slot="title"&gt; This is a Slot Header &lt;/h1&gt;</code>
 * - `<slot name="default"  />` - Used for message content
 */
export default class Message extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors | "grey";
    size?: import("../internalTypes/type-defs").Sizes;
    inner_class?: string;
    inner_style?: string;
    title_class?: string;
    title?: string;
    has_title?: boolean;
    dismissable?: boolean;
    active?: boolean;
}, {
    dismiss: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    default: {};
}> {
}
export type MessageProps = typeof __propDef.props;
export type MessageEvents = typeof __propDef.events;
export type MessageSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import('../internalTypes').ColorOptions | 'grey';
        size?: import('../internalTypes').SizeOptions;
        inner_class?: string;
        inner_style?: string;
        title_class?: string;
        title?: string;
        has_title?: boolean;
        dismissable?: boolean;
        active?: boolean;
    };
    events: {
        dismiss: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
    };
};
export {};
//# sourceMappingURL=Message.svelte.d.ts.map