/** @typedef {typeof __propDef.props}  FloatieProps */
/** @typedef {typeof __propDef.events}  FloatieEvents */
/** @typedef {typeof __propDef.slots}  FloatieSlots */
/**
 * @param {string} [title=""] - Title/Heading of the notification, Default: `""`
 * @param {string} [message=""] - Message in the notification, Default: `""`
 * @param {'notification'|'snackbar'|'toast'} [variant="notification"] - variation of floating UI, Default: `"notification"`
 * @param {number} [duration=3000] - Duration of the notification, Default: `3000`
 * @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Toast notification background color, Default: `"primary"`
 * @param {boolean} [light=false] - Inverted colors for notification box and contents, Default: `false`
 * @param {boolean} [dismissable=true] - Determines if notification is dismissable, Default: `true`
 * @param {boolean} [persistent=false] - A persistent notification without duration, stays till dismissed, Default: `false`
 * @param {object} [component=null] - Custom component, Default: `null`
 * @param {function} [beforeClose(props)] - Callback function call before close event
 * @param {function} [afterClose(props)] - Callback function call after close event
 * @param {array} [buttons=[]] - List of buttons to show in snackbar, Default: `[]`
 */
export default class Floatie extends SvelteComponentTyped<{
    [x: string]: any;
    light?: boolean;
    color?: import("../../internalTypes/type-defs").Colors;
    title?: string;
    dismissable?: boolean;
    duration?: number;
    message?: string;
    variant?: "notification" | "toast" | "snackbar";
    persistent?: boolean;
    component?: any;
    beforeClose?: (props: any) => void;
    afterClose?: (props: any) => void;
    buttons?: string[];
}, {
    destroy: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FloatieProps = typeof __propDef.props;
export type FloatieEvents = typeof __propDef.events;
export type FloatieSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        light?: boolean;
        color?: import("../../internalTypes/type-defs").Colors;
        title?: string;
        dismissable?: boolean;
        duration?: number;
        message?: string;
        variant?: 'notification' | 'snackbar' | 'toast';
        persistent?: boolean;
        component?: any;
        beforeClose?: (props: any) => void;
        afterClose?: (props: any) => void;
        buttons?: string[];
    };
    events: {
        destroy: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Floatie.svelte.d.ts.map