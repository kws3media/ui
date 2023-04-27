/** @typedef {typeof __propDef.props}  SearchFilterProps */
/** @typedef {typeof __propDef.events}  SearchFilterEvents */
/** @typedef {typeof __propDef.slots}  SearchFilterSlots */
/**
 * @param {object} [filter={}] - Contains filter options for dropdown, Default: `{}`
 * @param {object} [filterVals={}] - Contains the selected filter values, Default: `{}`
 * @param {string} [filterWidthStyle=""] - Inline CSS style for the filters, Default: `""`
 * @param {string} [hilightClass=""] - CSS classes for highlighted filter, Default: `""`
 * @param {object} [filter_label_map={}] - Contains custom labels for the filter, Default: `{}`
 */
export default class SearchFilter extends SvelteComponentTyped<{
    filter?: {};
    filterVals?: {};
    filterWidthStyle?: string;
    hilightClass?: string;
    filter_label_map?: {};
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SearchFilterProps = typeof __propDef.props;
export type SearchFilterEvents = typeof __propDef.events;
export type SearchFilterSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        filter?: {};
        filterVals?: {};
        filterWidthStyle?: string;
        hilightClass?: string;
        filter_label_map?: {};
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=SearchFilter.svelte.d.ts.map