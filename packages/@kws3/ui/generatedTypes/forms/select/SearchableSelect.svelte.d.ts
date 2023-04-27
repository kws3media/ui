/** @typedef {typeof __propDef.props}  SearchableSelectProps */
/** @typedef {typeof __propDef.events}  SearchableSelectEvents */
/** @typedef {typeof __propDef.slots}  SearchableSelectSlots */
/**
 * @param {object} [value=null] - Value of the Input
 *
 * This property can be bound to, to fetch the current value, Default: `null`
 * @param {string} [placeholder="Please select..."] - Placeholder text for the input, Default: `"Please select..."`
 * @param {array} [options=[]] - Array of strings, or objects.
 * Used to populate the list of options in the dropdown, Default: `[]`
 * @param {string} [search_key="name"] - If `options` is an array of objects,
 * this property of each object will be searched, Default: `"name"`
 * @param {string} [value_key="id"] - If `options` is an array of objects,
 * this property of each object will be returned as the value, Default: `"id"`
 * @param {string|''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
 * @param {string|''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
 * @param {string} [style=""] - Inline CSS for input container, Default: `""`
 * @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
 * @param {function|null} [search=null] - Async function to fetch options
 *
 * Only send this prop if you want to fetch `options` asynchronously.
 * `options` prop will be ignored if this prop is set., Default: `null`
 * @param {'fuzzy'|'strict'} [search_strategy="fuzzy"] - Filtered options to be displayed strictly based on search text or perform a fuzzy match.
 * Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching., Default: `"fuzzy"`
 * @param {boolean} [disabled=false] - Disables the component, Default: `false`
 * @param {string} [selected_icon="check"] - Icon used to mark selected items in dropdown list, Default: `"check"`
 * @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
 * @param {string} [async_search_prompt="Start typing to search..."] - Message to display in dropdown when async search can be performed, Default: `"Start typing to search..."`
 * @param {string} [remove_all_tip="Clear Selection"] - Tooltip text for the Clear selection button, Default: `"Clear Selection"`
 * @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
 * Can be a DOM element or a `string` with the CSS selector of the element.
 *
 * By default it renders in a custom container appended to `document.body`., Default: `undefined`
 * @param {string} [class=""] - CSS classes for input container, Default: `""`
 *
 * ### Events
 * - `change` - Triggered when the value changes
 * - `blur` - Triggered when the input loses focus
 *
 * ### Slots
 * - `<slot name="default" {search_key} {option} />` - Slot containing text for each selectable item
 *
 * Default value: `<span>{option[search_key] || option}</span>`
 */
export default class SearchableSelect extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    color?: import("../../internalTypes/type-defs").Colors;
    size?: import("../../internalTypes/type-defs").Sizes;
    disabled?: boolean;
    value?: any;
    options?: any[];
    readonly?: boolean;
    placeholder?: string;
    search?: Function;
    search_strategy?: string;
    dropdown_portal?: string | HTMLElement;
    search_key?: string;
    value_key?: string;
    selected_icon?: string;
    no_options_msg?: string;
    async_search_prompt?: string;
    remove_all_tip?: string;
}, {
    change: CustomEvent<any>;
    blur: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        search_key: any;
        option: any;
    };
}> {
}
export type SearchableSelectProps = typeof __propDef.props;
export type SearchableSelectEvents = typeof __propDef.events;
export type SearchableSelectSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        color?: import('../../internalTypes').ColorOptions;
        size?: import('../../internalTypes').SizeOptions;
        disabled?: boolean;
        value?: object;
        options?: any[];
        readonly?: boolean;
        placeholder?: string;
        search?: Function | null;
        search_strategy?: string | 'fuzzy' | 'strict';
        dropdown_portal?: HTMLElement | string;
        search_key?: string;
        value_key?: string;
        selected_icon?: string;
        no_options_msg?: string;
        async_search_prompt?: string;
        remove_all_tip?: string;
    };
    events: {
        change: CustomEvent<any>;
        blur: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            search_key: any;
            option: any;
        };
    };
};
export {};
//# sourceMappingURL=SearchableSelect.svelte.d.ts.map