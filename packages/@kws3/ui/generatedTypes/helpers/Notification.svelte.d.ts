/** @typedef {typeof __propDef.props}  NotificationProps */
/** @typedef {typeof __propDef.events}  NotificationEvents */
/** @typedef {typeof __propDef.slots}  NotificationSlots */
/**
 * @param {''|'primary'|'success'|'warning'|'info'|'danger'|'light'|'dark'} [color="info"] - Color of the Notification box, Default: `"info"`
 * @param {string} [style=""] - Inline CSS for notification content, Default: `""`
 * @param {boolean} [light=false] - Inverted colors for notification box and contents, Default: `false`
 * @param {boolean} [dismissable=false] - Determines whether close button is displayed or not, Default: `false`
 * @param {boolean} [active=true] - Determines whether the whole component is being displayed or not, Default: `true`
 * @param {string} [class=""] - CSS classes for notification container, Default: `""`
 *
 * ### Events
 * - `dismiss` - Fired when dismiss button is clicked.
 * Turns `active` to `false`, which hides the component.
 * The parent can then decide what to do with the component
 *
 * ### Slots
 * - `<slot name="default"  />` - Used for notification content
 */
export default class Notification extends SvelteComponentTyped<{
    light?: boolean;
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    dismissable?: boolean;
    active?: boolean;
}, {
    dismiss: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type NotificationProps = typeof __propDef.props;
export type NotificationEvents = typeof __propDef.events;
export type NotificationSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        light?: boolean;
        style?: string;
        class?: string;
        color?: import('../internalTypes').ColorOptions;
        dismissable?: boolean;
        active?: boolean;
    };
    events: {
        dismiss: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Notification.svelte.d.ts.map