/** @typedef {typeof __propDef.props}  DataSortProps */
/** @typedef {typeof __propDef.events}  DataSortEvents */
/** @typedef {typeof __propDef.slots}  DataSortSlots */
/**
 * @param {array} [options=[]] - List of options in the dropdown, Default: `[]`
 * @param {string} [sort_by=""] - Stores the selected option value, Default: `""`
 */
export default class DataSort extends SvelteComponentTyped<{
    options?: any[];
    sort_by?: string;
}, {
    sort: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DataSortProps = typeof __propDef.props;
export type DataSortEvents = typeof __propDef.events;
export type DataSortSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: any[];
        sort_by?: string;
    };
    events: {
        sort: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=DataSort.svelte.d.ts.map