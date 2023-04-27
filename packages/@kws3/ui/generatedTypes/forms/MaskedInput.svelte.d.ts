/** @typedef {typeof __propDef.props}  MaskedInputProps */
/** @typedef {typeof __propDef.events}  MaskedInputEvents */
/** @typedef {typeof __propDef.slots}  MaskedInputSlots */
/**
 * @param {array} [mask=[]] - Mask array
 *
 * Each element in the array has to be either a string or a regular expression. Each string is a fixed character in the mask and each regular expression is a placeholder that accepts user input., Default: `[]`
 * @param {string} [placeholder_char="_"] - This character represents the fillable spot in the mask, the guide character, Default: `"_"`
 * @param {boolean} [guide=true] - Displays a guide when the user starts typing, Default: `true`
 * @param {boolean} [guide_when_empty=false] - Displays a guide even before the user starts typing
 *
 * Requires `guide` to be `true`, Default: `false`
 * @param {boolean} [guide_on_output=false] - Whether the output should contain guide characters, Default: `false`
 * @param {boolean} [keep_char_positions=false] - When set to `true`, deleting a character leaves an empty space to allow overwriting
 *
 * Requires `guide` to be `true`, Default: `false`
 * @param {string} [placeholder=""] - Placeholder text. Requires `guide_when_empty` to be `false` to be displayed., Default: `""`
 * @param {string} [value=""] - Input value, Default: `""`
 * @param {string} [class=""] - CSS classes for the input, Default: `""`
 *
 * ### Events
 * - `change` - Native input change event
 */
export default class MaskedInput extends SvelteComponentTyped<{
    class?: string;
    value?: string;
    placeholder?: string;
    mask?: any[];
    placeholder_char?: string;
    guide?: boolean;
    guide_when_empty?: boolean;
    guide_on_output?: boolean;
    keep_char_positions?: boolean;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MaskedInputProps = typeof __propDef.props;
export type MaskedInputEvents = typeof __propDef.events;
export type MaskedInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        value?: string;
        placeholder?: string;
        mask?: any[];
        placeholder_char?: string;
        guide?: boolean;
        guide_when_empty?: boolean;
        guide_on_output?: boolean;
        keep_char_positions?: boolean;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=MaskedInput.svelte.d.ts.map