/** @typedef {typeof __propDef.props}  SearchInputProps */
/** @typedef {typeof __propDef.events}  SearchInputEvents */
/** @typedef {typeof __propDef.slots}  SearchInputSlots */
/**
 * @param {string|''|'small'|'medium'|'large'} [size="small"] - Size of the input, Default: `"small"`
 * @param {string|''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
 * @param {string} [placeholder="Search"] - Placeholder text for the input, Default: `"Search"`
 * @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
 * @param {boolean} [disabled=false] - Disables the component, Default: `false`
 * @param {array} [options=[]] - Array of objects., Default: `[]`
 * @param {array} [searchableKeys=[]] - array of object properties to search in., Default: `[]`
 * @param {boolean} [highlighted_results=true] - Whether to show the highlighted or plain results in the dropdown., Default: `true`
 * @param {number} [score_threshold=2] - Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `2`
 * @param {number} [scoreThreshold=2] - (deprecated) Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `2`
 * @param {boolean} [word_match=false] - Whether to match against each word seperatly or whole sentence in flow., Default: `false`
 * @param {string} [style=""] - Inline CSS for the input, Default: `""`
 * @param {string} [class=""] - CSS classes for the input, Default: `""`
 */
export default class SearchInput extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    disabled?: boolean;
    options?: any[];
    readonly?: boolean;
    placeholder?: string;
    highlighted_results?: boolean;
    score_threshold?: number;
    scoreThreshold?: number;
    searchableKeys?: any[];
    word_match?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SearchInputProps = typeof __propDef.props;
export type SearchInputEvents = typeof __propDef.events;
export type SearchInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import('../internalTypes').ColorOptions;
        size?: import('../internalTypes').SizeOptions;
        disabled?: boolean;
        options?: any[];
        readonly?: boolean;
        placeholder?: string;
        highlighted_results?: boolean;
        score_threshold?: number;
        scoreThreshold?: number;
        searchableKeys?: any[];
        word_match?: boolean;
    };
    /** @typedef {typeof __propDef.events}  SearchInputEvents */
    /** @typedef {typeof __propDef.slots}  SearchInputSlots */
    /**
     * @param {string|''|'small'|'medium'|'large'} [size="small"] - Size of the input, Default: `"small"`
     * @param {string|''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
     * @param {string} [placeholder="Search"] - Placeholder text for the input, Default: `"Search"`
     * @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
     * @param {boolean} [disabled=false] - Disables the component, Default: `false`
     * @param {array} [options=[]] - Array of objects., Default: `[]`
     * @param {array} [searchableKeys=[]] - array of object properties to search in., Default: `[]`
     * @param {boolean} [highlighted_results=true] - Whether to show the highlighted or plain results in the dropdown., Default: `true`
     * @param {number} [score_threshold=2] - Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `2`
     * @param {number} [scoreThreshold=2] - (deprecated) Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `2`
     * @param {boolean} [word_match=false] - Whether to match against each word seperatly or whole sentence in flow., Default: `false`
     * @param {string} [style=""] - Inline CSS for the input, Default: `""`
     * @param {string} [class=""] - CSS classes for the input, Default: `""`
     */
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=SearchInput.svelte.d.ts.map