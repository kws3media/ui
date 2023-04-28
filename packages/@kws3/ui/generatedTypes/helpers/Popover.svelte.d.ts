/** @typedef {typeof __propDef.props}  PopoverProps */
/** @typedef {typeof __propDef.events}  PopoverEvents */
/** @typedef {typeof __propDef.slots}  PopoverSlots */
/**
 * @param {string} [icon="info-circle"] - Icon used when default slot has no content, Default: `"info-circle"`
 * @param {string} [icon_color="primary"] - Colour of the trigger icon displayed when default slot has no content, Default: `"primary"`
 * @param {string} [icon_size="small"] - Size of the trigger icon displayed when default slot has no content, Default: `"small"`
 * @param {string} [trigger="click"] - Determines the events that cause the Popover to show. Multiple event names are separated by spaces.
 *
 * **Examples:** `click`, `mouseenter`, `mouseenter focus`
 *
 * If you would like to trigger the popover programatically only, you can use `manual`., Default: `"click"`
 * @param {string} [placement="auto"] - Preferred placement of the Popover
 *
 * Available options: <a target="_blank" href="https://atomiks.github.io/tippyjs/v6/all-props/#placement">https://atomiks.github.io/tippyjs/v6/all-props/#placement</a>, Default: `"auto"`
 * @param {boolean} [interactive=false] - Allows you to interact with the Popover content, when turned on, Default: `false`
 * @param {boolean} [hide_on_click=true] - Whether the popover should hide on clicking outside of it, Default: `true`
 * @param {object} [external_target=null] - Specify a target node reference to use as the Popover content
 *
 * When set to `null`, it will use the content of the `popover` slot, Default: `null`
 * @param {string} [max_width="none"] - Maximum allowed width of the popover
 *
 * It can be any CSS value associated with `max-width` property, including `"none"`, Default: `"none"`
 * @param {string} [style=""] - Inline CSS for Popover trigger, Default: `""`
 * @param {string} [class=""] - CSS classes for Popover trigger, Default: `""`
 * @method `open()` - Open method
 * @method `close()` - Close method
 * @method `enable()` - Enable method
 * @method `disable()` - Disable method
 * @method `setProps(props)` - SetProps method
 *
 * ### Events
 * - `opening` - Triggered when popover is opening
 * - `open` - Triggered when popover is opened
 * - `closing` - Triggered when popover is closing
 * - `close` - Triggered when popover is closed
 * - `trigger` - Triggered when popover is triggered either programatically or by user interaction
 *
 * ### Slots
 * - `<slot name="default"  />` - Content of the Popover Trigger, by default it displays an Icon
 * - `<slot name="popover"  />` - Slot containing the popover content
 */
export default class Popover extends SvelteComponentTyped<{
    interactive?: boolean;
    placement?: string;
    trigger?: string;
    icon?: string;
    icon_color?: import("../internalTypes/type-defs").Colors | "grey";
    icon_size?: import("../internalTypes/type-defs").Sizes;
    hide_on_click?: boolean;
    external_target?: any;
    max_width?: string;
    style?: string;
    class?: string;
    open?: () => void;
    close?: () => void;
    enable?: () => void;
    disable?: () => void;
    setProps?: (props: any) => void;
}, {
    opening: CustomEvent<any>;
    open: CustomEvent<any>;
    closing: CustomEvent<any>;
    close: CustomEvent<any>;
    trigger: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    popover: {};
}> {
    get open(): () => void;
    get close(): () => void;
    get enable(): () => void;
    get disable(): () => void;
    get setProps(): (props: any) => void;
}
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        interactive?: boolean;
        placement?: string;
        trigger?: string;
        icon?: string;
        icon_color?: import('../internalTypes').ColorOptions | 'grey';
        icon_size?: import('../internalTypes').SizeOptions;
        hide_on_click?: boolean;
        external_target?: any;
        max_width?: string;
        style?: string;
        class?: string;
        open?: () => void;
        close?: () => void;
        enable?: () => void;
        disable?: () => void;
        setProps?: (props: any) => void;
    };
    events: {
        opening: CustomEvent<any>;
        open: CustomEvent<any>;
        closing: CustomEvent<any>;
        close: CustomEvent<any>;
        trigger: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        popover: {};
    };
};
export {};
//# sourceMappingURL=Popover.svelte.d.ts.map