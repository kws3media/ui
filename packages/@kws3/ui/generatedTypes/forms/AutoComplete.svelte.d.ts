/** @typedef {typeof __propDef.props}  AutoCompleteProps */
/** @typedef {typeof __propDef.events}  AutoCompleteEvents */
/** @typedef {typeof __propDef.slots}  AutoCompleteSlots */
/**
 * @param {?string} [value=] - Value of the Input
 *
 * This property can be bound to, to fetch the current value, Default: ``
 * @param {string} [placeholder=""] - Placeholder text for the input, Default: `""`
 * @param {array} [options=[]] - Array of strings, or objects.
 * Used to populate the list of options in the dropdown, Default: `[]`
 * @param {function|null} [search=null] - Async function to fetch options
 *
 * Only send this prop if you want to fetch `options` asynchronously.
 * `options` prop will be ignored if this prop is set., Default: `null`
 * @param {string|'fuzzy'|'strict'} [search_strategy="fuzzy"] - Filtered options to be displayed strictly based on search text or perform a fuzzy match.
 * Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching., Default: `"fuzzy"`
 * @param {boolean} [highlighted_results=true] - Whether to show the highlighted or plain results in the dropdown., Default: `true`
 * @param {number} [score_threshold=5] - Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `5`
 * @param {number} [scoreThreshold=undefined] - (deprecated) Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `undefined`
 * @param {string} [size=""] - Size of the input, Default: `""`
 * @param {string} [color=""] - Color of the input, Default: `""`
 * @param {string} [style=""] - Inline CSS for input container, Default: `""`
 * @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
 * @param {boolean} [disabled=false] - Disables the component, Default: `false`
 * @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
 * Can be a DOM element or a `string` with the CSS selector of the element.
 *
 * By default it renders in a custom container appended to `document.body`., Default: `undefined`
 * @param {string} [class=""] - CSS classes for input container, Default: `""`
 *
 * ### Events
 * - `change`
 * - `blur` - Triggered when the input loses focus
 *
 * ### Slots
 * - `<slot name="default" {option} />` - Slot containing text for each selectable item
 *
 * Default value: `<span>{option.label}</span>`
 */
export default class AutoComplete extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    disabled?: boolean;
    value?: string;
    options?: any[];
    readonly?: boolean;
    placeholder?: string;
    search?: Function;
    search_strategy?: string;
    highlighted_results?: boolean;
    score_threshold?: number;
    scoreThreshold?: number;
    dropdown_portal?: string | HTMLElement;
}, {
    change: CustomEvent<any>;
    blur: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        option: any;
    };
}> {
}
export type AutoCompleteProps = typeof __propDef.props;
export type AutoCompleteEvents = typeof __propDef.events;
export type AutoCompleteSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import('../internalTypes').ColorOptions;
        size?: import('../internalTypes').SizeOptions;
        disabled?: boolean;
        value?: string | null;
        options?: any[];
        readonly?: boolean;
        placeholder?: string;
        search?: Function | null;
        search_strategy?: string | 'fuzzy' | 'strict';
        highlighted_results?: boolean;
        score_threshold?: number;
        scoreThreshold?: number;
        dropdown_portal?: HTMLElement | string;
    };
    events: {
        change: CustomEvent<any>;
        blur: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            option: any;
        };
    };
};
export {};
//# sourceMappingURL=AutoComplete.svelte.d.ts.map