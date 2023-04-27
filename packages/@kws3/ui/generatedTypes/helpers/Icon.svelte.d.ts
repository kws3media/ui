/** @typedef {typeof __propDef.props}  IconProps */
/** @typedef {typeof __propDef.events}  IconEvents */
/** @typedef {typeof __propDef.slots}  IconSlots */
/**
 * @param {string|''|'small'|'medium'|'large'} [size=""] - Size of the Icon, Default: `""`
 * @param {string|''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the Icon, Default: `""`
 * @param {string} [icon=""] - The name of the icon that is to be displayed, from the relevant icon family, Default: `""`
 * @param {string|''|'fa'|'lar'|'las'|'gg'|'unicons'|'material'} [family=""] - Icon family, can be modified globally in framework settings
 *
 * Ultimately defaults to `fa`, if family is not set anywhere, Default: `""`
 * @param {string} [style=""] - Inline CSS for icon container, Default: `""`
 * @param {string} [inner_class=""] - CSS classes for icon, Default: `""`
 * @param {string} [inner_style=""] - Inline CSS for icon, Default: `""`
 * @param {string} [class=""] - CSS classes for icon container, Default: `""`
 */
export default class Icon extends SvelteComponentTyped<{
    icon?: string;
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors | "grey";
    size?: import("../internalTypes/type-defs").Sizes;
    family?: string;
    inner_class?: string;
    inner_style?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon?: string;
        style?: string;
        class?: string;
        color?: import('../internalTypes').ColorOptions | 'grey';
        size?: import('../internalTypes').SizeOptions;
        family?: string | '' | 'fa' | 'lar' | 'las' | 'gg' | 'unicons' | 'material';
        inner_class?: string;
        inner_style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Icon.svelte.d.ts.map