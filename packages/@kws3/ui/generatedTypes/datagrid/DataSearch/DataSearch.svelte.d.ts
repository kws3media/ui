/** @typedef {typeof __propDef.props}  DataSearchProps */
/** @typedef {typeof __propDef.events}  DataSearchEvents */
/** @typedef {typeof __propDef.slots}  DataSearchSlots */
/**
 * @param {boolean} [hasSearch=true] - Determines whether there is a search input or not, Default: `true`
 * @param {boolean} [hasFilters=true] - Determines if there are filters on search, Default: `true`
 * @param {string} [placeholder=""] - Placeholder text for the search input, Default: `""`
 * @param {object} [filters={}] - Contains all the filter dropdown values, Default: `{}`
 * @param {string} [q=""] - Query string from the browser url, Default: `""`
 * @param {string} [filter_in_use_class="is-in-use"] - CSS class for in use filters, Default: `"is-in-use"`
 * @param {string} [filter_not_in_use_class="is-not-in-use"] - Css class for not in use filters, Default: `"is-not-in-use"`
 * @param {object} [filterComponent=null] - To use a custom component for filters, Default: `null`
 * @param {object} [filter_label_map={}] - Contains all the labels for the filter dropdowns, Default: `{}`
 *
 * ### Events
 * - `resetSearch` - Triggered when the search is reset
 * - `search` - Event triggered on search
 */
export default class DataSearch extends SvelteComponentTyped<{
    q?: string;
    placeholder?: string;
    filter_label_map?: {};
    hasSearch?: boolean;
    hasFilters?: boolean;
    filters?: {};
    filter_in_use_class?: string;
    filter_not_in_use_class?: string;
    filterComponent?: any;
}, {
    resetSearch: CustomEvent<any>;
    search: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DataSearchProps = typeof __propDef.props;
export type DataSearchEvents = typeof __propDef.events;
export type DataSearchSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        q?: string;
        placeholder?: string;
        filter_label_map?: {};
        hasSearch?: boolean;
        hasFilters?: boolean;
        filters?: {};
        filter_in_use_class?: string;
        filter_not_in_use_class?: string;
        filterComponent?: any;
    };
    events: {
        resetSearch: CustomEvent<any>;
        search: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=DataSearch.svelte.d.ts.map