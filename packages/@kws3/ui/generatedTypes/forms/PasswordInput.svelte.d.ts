/** @typedef {typeof __propDef.props}  PasswordInputProps */
/** @typedef {typeof __propDef.events}  PasswordInputEvents */
/** @typedef {typeof __propDef.slots}  PasswordInputSlots */
/**
 * @param {boolean} [has_visibility_switcher=true] - whether has visibility feature or not, Default: `true`
 * @param {?string} [value=] - Value of the Input
 *
 * This property can be bound to, to fetch the current value, Default: ``
 * @param {SizeOptions} [size=] - Size of the PasswordInput, Default: ``
 * @param {ColorOptions} [color=] - Colour of the PasswordInput, Default: ``
 * @param {string} [style=""] - Inline CSS for the PasswordInput, Default: `""`
 * @param {boolean} [disabled=false] - Disables the PasswordInput, Default: `false`
 * @param {string} [placeholder=""] - Input placeholder, Default: `""`
 * @param {string|''|'fa'|'lar'|'las'|'gg'|'unicons'|'material'} [icon_family=""] - Icon family to be used
 *
 * Defaults to global family set via `Icon.setDefaultIconType()`
 *
 * Ultimately defaults to `fa`, if family is not set anywhere, Default: `""`
 * @param {string} [class=""] - CSS classes of the PasswordInput, Default: `""`
 */
export default class PasswordInput extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    disabled?: boolean;
    icon_family?: string;
    value?: string;
    placeholder?: string;
    has_visibility_switcher?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PasswordInputProps = typeof __propDef.props;
export type PasswordInputEvents = typeof __propDef.events;
export type PasswordInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import("../internalTypes/type-defs").Colors;
        size?: import("../internalTypes/type-defs").Sizes;
        disabled?: boolean;
        icon_family?: string | '' | 'fa' | 'lar' | 'las' | 'gg' | 'unicons' | 'material';
        value?: string | null;
        placeholder?: string;
        has_visibility_switcher?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=PasswordInput.svelte.d.ts.map