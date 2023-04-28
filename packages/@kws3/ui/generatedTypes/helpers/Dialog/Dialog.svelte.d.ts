/** @typedef {typeof __propDef.props}  DialogProps */
/** @typedef {typeof __propDef.events}  DialogEvents */
/** @typedef {typeof __propDef.slots}  DialogSlots */
/**
 * @param {string} [title=""] - Title text of the Dialog box, Default: `""`
 * @param {string} [help_text=""] - Additional text to provide further context to the user, Default: `""`
 * @param {SizeOptions} [size=small] - Size of the Dialog box, Default: `small`
 * @param {string} [input_value=""] - Default value inside text input displayed on `prompt()` Dialogs, Default: `""`
 * @param {string} [icon=""] - Icon in the Dialog box, Default: `""`
 * @param {ColorOptions} [icon_color=primary] - Color of the Icon in the Dialog box, Default: `primary`
 * @param {SizeOptions} [icon_size=] - Size of the Icon in the Dialog box, Default: ``
 * @param {string} [ok_button_text="Ok"] - Text to be displayed in the OK button, Default: `"Ok"`
 * @param {ColorOptions} [ok_button_color=primary] - Color of OK button, Default: `primary`
 * @param {string} [ok_button_icon="check"] - Icon in the OK button, Default: `"check"`
 * @param {string} [cancel_button_text="Cancel"] - Text to be displayed in the Cancel button, Default: `"Cancel"`
 * @param {ColorOptions} [cancel_button_color=] - Color of Cancel button, Default: ``
 * @param {string} [cancel_button_icon="ban"] - Icon in the Cancel button, Default: `"ban"`
 * @param {string} [_type=""] - Determines the type of Dialog.
 *
 * For internal use only - not part of config object, Default: `""`
 * @param {string} [_text=""] - Text inside Dialog box
 *
 * For internal use only - not part of config object, Default: `""`
 *
 * ### Events
 * - `_done` - For internal use, not part of any configuration
 */
export default class Dialog extends SvelteComponentTyped<{
    icon?: string;
    icon_color?: import("../../internalTypes/type-defs").Colors;
    icon_size?: import("../../internalTypes/type-defs").Sizes;
    size?: import("../../internalTypes/type-defs").Sizes;
    title?: string;
    help_text?: string;
    input_value?: string;
    ok_button_text?: string;
    ok_button_color?: import("../../internalTypes/type-defs").Colors;
    ok_button_icon?: string;
    cancel_button_text?: string;
    cancel_button_color?: import("../../internalTypes/type-defs").Colors;
    cancel_button_icon?: string;
    _type?: string;
    _text?: string;
}, {
    _done: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        icon?: string;
        icon_color?: import("../../internalTypes/type-defs").Colors;
        icon_size?: import("../../internalTypes/type-defs").Sizes;
        size?: import("../../internalTypes/type-defs").Sizes;
        title?: string;
        help_text?: string;
        input_value?: string;
        ok_button_text?: string;
        ok_button_color?: import("../../internalTypes/type-defs").Colors;
        ok_button_icon?: string;
        cancel_button_text?: string;
        cancel_button_color?: import("../../internalTypes/type-defs").Colors;
        cancel_button_icon?: string;
        _type?: string;
        _text?: string;
    };
    events: {
        _done: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Dialog.svelte.d.ts.map