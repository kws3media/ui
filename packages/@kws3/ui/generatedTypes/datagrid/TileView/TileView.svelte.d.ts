/** @typedef {typeof __propDef.props}  TileViewProps */
/** @typedef {typeof __propDef.events}  TileViewEvents */
/** @typedef {typeof __propDef.slots}  TileViewSlots */
/**
 * @param {string} [iteration_key="id"] - Iteration key, Default: `"id"`
 * @param {array} [data=[]] - Contains all the results to be listed, Default: `[]`
 * @param {boolean} [transition=false] - Determines if a transition effect is used, Default: `false`
 * @param {object} [tileItemComponent=null] - Contains a custom component, Default: `null`
 * @param {number} [per_row=3] - Sets how many items to display in a row. This is ignored when `fluid_items_per_row` is `true`, Default: `3`
 * @param {boolean} [fluid_items_per_row=false] - When set to `true`, the number of items per row varies with available space, Default: `false`
 * @param {string} [min_width="unset"] - CSS string specifying minimum width, this is only applied when `fluid_items_per_row` is `true`, Default: `"unset"`
 * @param {string} [max_width="unset"] - CSS string specifying maximum width, this is only applied when `fluid_items_per_row` is `true`, Default: `"unset"`
 * @param {boolean} [grow=true] - Whether a tile can grow if there is space available, this is only applied when `fluid_items_per_row` is `true`, Default: `true`
 * @param {boolean} [shrink=true] - Whether a tile can shrink if there isn't enough space available, this is only applied when `fluid_items_per_row` is `true`, Default: `true`
 * @param {object} [columns={}] - Column names for the displayed table {db_field_name: column_name}, Default: `{}`
 * @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
 * @param {boolean} [clickableRows=false] - Determines whether rows are clickable or not, Default: `false`
 * @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
 * @param {object} [valueTransformers={}] - Contains all custom values for each column, Default: `{}`
 * @param {object} [classTransformers={}] - CSS class names for each column, Default: `{}`
 * @param {object} [styleTransformers={}] - CSS styles for each column, Default: `{}`
 * @param {object} [visibilityMap={}] - Contains list of columns which can be visible or not, Default: `{}`
 * @param {string} [class=""] - CSS classes for tiles wrapper, Default: `""`
 *
 * ### Events
 * - `rowClick`
 * - `rowSelectChecked`
 * - `_forwardEvent`
 */
export default class TileView extends SvelteComponentTyped<{
    max_width?: string;
    class?: string;
    data?: any[];
    transition?: boolean;
    visualActivationOnClick?: boolean;
    activatedId?: any;
    clickableRows?: boolean;
    iteration_key?: string;
    columns?: {};
    valueTransformers?: {};
    classTransformers?: {};
    styleTransformers?: {};
    visibilityMap?: {};
    tileItemComponent?: any;
    per_row?: number;
    fluid_items_per_row?: boolean;
    min_width?: string;
    grow?: boolean;
    shrink?: boolean;
}, {
    rowClick: any;
    rowSelectChecked: any;
    _forwardEvent: any;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TileViewProps = typeof __propDef.props;
export type TileViewEvents = typeof __propDef.events;
export type TileViewSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        max_width?: string;
        class?: string;
        data?: any[];
        transition?: boolean;
        visualActivationOnClick?: boolean;
        activatedId?: any;
        clickableRows?: boolean;
        iteration_key?: string;
        columns?: {};
        valueTransformers?: {};
        classTransformers?: {};
        styleTransformers?: {};
        visibilityMap?: {};
        tileItemComponent?: any;
        per_row?: number;
        fluid_items_per_row?: boolean;
        min_width?: string;
        grow?: boolean;
        shrink?: boolean;
    };
    events: {
        rowClick: any;
        rowSelectChecked: any;
        _forwardEvent: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=TileView.svelte.d.ts.map