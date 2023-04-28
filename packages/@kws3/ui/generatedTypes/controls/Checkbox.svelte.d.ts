/** @typedef {typeof __propDef.props}  CheckboxProps */
/** @typedef {typeof __propDef.events}  CheckboxEvents */
/** @typedef {typeof __propDef.slots}  CheckboxSlots */
/**
 * @param {SizeOptions} [size=] - Size of the Checkbox, Default: ``
 * @param {Exclude<ColorOptions, 'success'>} [color=] - Colour of the Checkbox, Default: ``
 * @param {string} [style=""] - Inline CSS for the Checkbox, Default: `""`
 * @param {boolean} [inverted=false] - Inverts the Checkbox colour theme, Default: `false`
 * @param {boolean} [circle=false] - Makes the Checkbox round, Default: `false`
 * @param {boolean} [checked=false] - Determines the current state of the Checkbox
 *
 * Checked\Not Checked, Default: `false`
 * @param {boolean} [disabled=false] - Disables the Checkbox, Default: `false`
 * @param {string} [icon="check"] - The name of the icon that is to be used in the Checkbox, Default: `"check"`
 * @param {string} [label_style=""] - Inline CSS for the Checkbox label, Default: `""`
 * @param {string|''|'fa'|'lar'|'las'|'gg'|'unicons'|'material'} [icon_family=""] - Icon family to be used
 *
 * Defaults to global family set via `Icon.setDefaultIconType()`
 *
 * Ultimately defaults to `fa`, if family is not set anywhere, Default: `""`
 * @param {string} [class=""] - CSS classes of the Checkbox, Default: `""`
 *
 * ### Events
 * - `change` - Checkbox change event
 *
 * ### Slots
 * - `<slot name="default"  />` - Used for the Checkbox label
 */
export default class Checkbox extends SvelteComponentTyped<{
    icon?: string;
    style?: string;
    class?: string;
    color?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
    size?: import("../internalTypes/type-defs").Sizes;
    circle?: boolean;
    disabled?: boolean;
    inverted?: boolean;
    checked?: boolean;
    label_style?: string;
    icon_family?: string;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon?: string;
        style?: string;
        class?: string;
        color?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
        size?: import("../internalTypes/type-defs").Sizes;
        circle?: boolean;
        disabled?: boolean;
        inverted?: boolean;
        checked?: boolean;
        label_style?: string;
        icon_family?: string | '' | 'fa' | 'lar' | 'las' | 'gg' | 'unicons' | 'material';
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Checkbox.svelte.d.ts.map