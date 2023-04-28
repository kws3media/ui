/** @typedef {typeof __propDef.props}  ToggleButtonsProps */
/** @typedef {typeof __propDef.events}  ToggleButtonsEvents */
/** @typedef {typeof __propDef.slots}  ToggleButtonsSlots */
/**
 * @param {object} [value=null] - Value of the Toggle button
 *
 * This property can be bound to, to fetch the current value, Default: `null`
 * @param {boolean} [disabled=false] - Disables the Toggle button, Default: `false`
 * @param {array} [options=[]] - Define an array of button objects, each object can have the following properties:
 *
 * - `name`: Main text of button
 * - `value`: Value of the button
 * - `subtitle`: Optional subtitle
 * - `icon`: Optional Icon to display
 * - `active_class`: Custom class to apply when button is active
 * - `inactive_class`: Custom class to apply when button is inactive
 *
 * ---, Default: `[]`
 * @param {string} [inner_class=""] - CSS classes for Button `.control` wrapper, Default: `""`
 * @param {string} [active_class="is-primary"] - CSS classes to apply when a button is active (pressed), Default: `"is-primary"`
 * @param {string} [inactive_class="is-outlined"] - CSS classes to apply when a button is inactive (not pressed), Default: `"is-outlined"`
 * @param {SizeOptions} [size=] - Size of the Toggle Buttons, Default: ``
 * @param {boolean} [fullwidth=false] - Expand all buttons so that they occupy full width of wrapping element, Default: `false`
 * @param {string} [class=""] - CSS classes for the Button container, Default: `""`
 *
 * ### Events
 * - `change` - Toggle button change event
 */
export default class ToggleButtons extends SvelteComponentTyped<{
    class?: string;
    size?: import("../internalTypes/type-defs").Sizes;
    inner_class?: string;
    disabled?: boolean;
    value?: any;
    fullwidth?: boolean;
    options?: any[];
    active_class?: string;
    inactive_class?: string;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ToggleButtonsProps = typeof __propDef.props;
export type ToggleButtonsEvents = typeof __propDef.events;
export type ToggleButtonsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        size?: import("../internalTypes/type-defs").Sizes;
        inner_class?: string;
        disabled?: boolean;
        value?: any;
        fullwidth?: boolean;
        options?: any[];
        active_class?: string;
        inactive_class?: string;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=ToggleButtons.svelte.d.ts.map