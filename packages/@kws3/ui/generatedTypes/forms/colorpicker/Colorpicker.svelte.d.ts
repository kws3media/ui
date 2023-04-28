/** @typedef {typeof __propDef.props}  ColorpickerProps */
/** @typedef {typeof __propDef.events}  ColorpickerEvents */
/** @typedef {typeof __propDef.slots}  ColorpickerSlots */
/**
 * @param {string} [color="000000"] - Current selected colour (hex format only)
 *
 * This property can be bound to, to fetch the current colour, Default: `"000000"`
 * @param {boolean} [typeable=true] - Allows typing the colour hex Code, Default: `true`
 * @param {boolean} [readonly=false] - Enables read-only mode, Default: `false`
 * @param {boolean} [mini=false] - Alternate mini colour picker without typeable input, Default: `false`
 * @param {boolean} [disabled=false] - Disables the component, Default: `false`
 * @param {string} [size=""] - Size of the colour picker trigger, Default: `""`
 *
 * ### Events
 * - `change` - Triggered when color changes
 */
export default class Colorpicker extends SvelteComponentTyped<{
    color?: string;
    size?: import("../../internalTypes/type-defs").Sizes;
    disabled?: boolean;
    typeable?: boolean;
    readonly?: boolean;
    mini?: boolean;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ColorpickerProps = typeof __propDef.props;
export type ColorpickerEvents = typeof __propDef.events;
export type ColorpickerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        color?: string;
        size?: import('../../internalTypes').SizeOptions;
        disabled?: boolean;
        typeable?: boolean;
        readonly?: boolean;
        mini?: boolean;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Colorpicker.svelte.d.ts.map