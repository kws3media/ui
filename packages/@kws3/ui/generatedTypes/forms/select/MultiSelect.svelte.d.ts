/** @typedef {typeof __propDef.props}  MultiSelectProps */
/** @typedef {typeof __propDef.events}  MultiSelectEvents */
/** @typedef {typeof __propDef.slots}  MultiSelectSlots */
/**
 * @param {Array|?string} [value=undefined] - Value of the Input
 *
 * This property can be bound to, to fetch the current value, Default: `undefined`
 * @param {object} [max=null] - Maximum number of selectable items from dropdown list.
 *
 * Accepts a `null` value for unlimited selected items.
 * Or a number value, Default: `null`
 * @param {string} [placeholder="Please select..."] - Placeholder text for the input, Default: `"Please select..."`
 * @param {array} [options=[]] - Array of strings, or objects.
 * Used to populate the list of options in the dropdown, Default: `[]`
 * @param {string} [search_key="name"] - If `options` is an array of objects,
 * this property of each object will be searched, Default: `"name"`
 * @param {string} [value_key="id"] - If `options` is an array of objects,
 * this property of each object will be returned as the value, Default: `"id"`
 * @param {function|null} [search=null] - Async function to fetch options
 *
 * Only send this prop if you want to fetch `options` asynchronously.
 * `options` prop will be ignored if this prop is set., Default: `null`
 * @param {string|'fuzzy'|'strict'} [search_strategy="fuzzy"] - Filtered options to be displayed strictly based on search text or perform a fuzzy match.
 * Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching., Default: `"fuzzy"`
 * @param {number} [score_threshold=3] - Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `3`
 * @param {number} [scoreThreshold=3] - (deprecated) Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `3`
 * @param {string|''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
 * @param {string|''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
 * @param {string} [style=""] - Inline CSS for input container, Default: `""`
 * @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
 * @param {boolean} [disabled=false] - Disables the component, Default: `false`
 * @param {string} [selected_icon="check"] - Icon used to mark selected items in dropdown list, Default: `"check"`
 * @param {boolean} [summary_mode=false] - Shows only the number of items selected, instead of listing all the selected items in the input., Default: `false`
 * @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
 * @param {string} [async_search_prompt="Start typing to search..."] - Message to display in dropdown when async search can be performed, Default: `"Start typing to search..."`
 * @param {string} [remove_btn_tip="Remove"] - Tooltip text for Remove Item button. This `string` will precede the selected Item Name in the tooltip., Default: `"Remove"`
 * @param {string} [remove_all_tip="Remove all"] - Tooltip text for the Clear All button, Default: `"Remove all"`
 * @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
 * Can be a DOM element or a `string` with the CSS selector of the element.
 *
 * By default it renders in a custom container appended to `document.body`., Default: `undefined`
 * @param {string} [class=""] - CSS classes for input container, Default: `""`
 *
 * ### Events
 * - `change` - Triggered when the value changes
 * - `add` - Triggered when an item is added from dropdown list
 * - `remove` - Triggered when an item is removed from selected Items
 * - `blur` - Triggered when the input loses focus
 *
 * ### Slots
 * - `<slot name="default" {search_key} {option} />` - Slot containing text for each selectable item
 *
 * Default value: `<span>{option[search_key] || option}</span>`
 */
export default class MultiSelect extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../../internalTypes/type-defs").Colors;
    size?: import("../../internalTypes/type-defs").Sizes;
    disabled?: boolean;
    max?: number;
    value?: string | any[];
    options?: any[];
    readonly?: boolean;
    placeholder?: string;
    search?: Function;
    search_strategy?: string;
    score_threshold?: number;
    scoreThreshold?: number;
    dropdown_portal?: string | HTMLElement;
    search_key?: string;
    value_key?: string;
    selected_icon?: string;
    no_options_msg?: string;
    async_search_prompt?: string;
    remove_all_tip?: string;
    summary_mode?: boolean;
    remove_btn_tip?: string;
}, {
    change: CustomEvent<any>;
    add: CustomEvent<any>;
    remove: CustomEvent<any>;
    blur: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        search_key: string;
        option: any;
    };
}> {
}
export type MultiSelectProps = typeof __propDef.props;
export type MultiSelectEvents = typeof __propDef.events;
export type MultiSelectSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import('../../internalTypes').ColorOptions;
        size?: import('../../internalTypes').SizeOptions;
        disabled?: boolean;
        max?: number | null;
        value?: any[] | (string | null);
        options?: any[];
        readonly?: boolean;
        placeholder?: string;
        search?: Function | null;
        search_strategy?: string | 'fuzzy' | 'strict';
        score_threshold?: number;
        scoreThreshold?: number;
        dropdown_portal?: HTMLElement | string;
        search_key?: string;
        value_key?: string;
        selected_icon?: string;
        no_options_msg?: string;
        async_search_prompt?: string;
        remove_all_tip?: string;
        summary_mode?: boolean;
        remove_btn_tip?: string;
    };
    events: {
        change: CustomEvent<any>;
        add: CustomEvent<any>;
        remove: CustomEvent<any>;
        blur: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            search_key: string;
            option: any;
        };
    };
};
export {};
//# sourceMappingURL=MultiSelect.svelte.d.ts.map