/** @typedef {typeof __propDef.props}  GridViewProps */
/** @typedef {typeof __propDef.events}  GridViewEvents */
/** @typedef {typeof __propDef.slots}  GridViewSlots */
/**
 * @param {string} [iteration_key="id"] - Iteration key, Default: `"id"`
 * @param {array} [data=[]] - Contains all the results that needs to be displayed, Default: `[]`
 * @param {object} [columns={}] - Table column names. {db_field_name: column_name}, Default: `{}`
 * @param {boolean} [transition=false] - Determines if a transition effect is used, Default: `false`
 * @param {boolean} [is_striped=true] - Determines whether to use alternating row shading in the table view, Default: `true`
 * @param {boolean} [is_narrow=false] - Determines whether to display rows in a more compact manner, Default: `false`
 * @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
 * @param {boolean} [clickableRows=false] - Determines whether rows are clickable or not, Default: `false`
 * @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
 * @param {boolean} [bulk_actions=false] - Determines if selecting multiple rows and doing multiple actions is allowed, Default: `false`
 * @param {boolean} [selectAll=false] - Determines if all rows are selected, Default: `false`
 * @param {array} [selectedIds=[]] - List of unique IDs of all the selected rows, Default: `[]`
 * @param {string} [selectAllCheckboxColor="primary"] - Colour of the `select all` checkbox, Default: `"primary"`
 * @param {string} [selectCheckboxColor="info"] - Color of the checkbox on each row, Default: `"info"`
 * @param {string} [selectCheckboxSize="medium"] - Size of the checkbox, Default: `"medium"`
 * @param {object} [valueTransformers={}] - Contains all custom values for each column, Default: `{}`
 * @param {object} [classTransformers={}] - CSS classes for each column, Default: `{}`
 * @param {object} [styleTransformers={}] - CSS styles for each column, Default: `{}`
 * @param {object} [visibilityMap={}] - Contains list of columns which can be visible or not, Default: `{}`
 * @param {object} [cellComponentMap={}] - Contains list of columns with its custom cell component, Default: `{}`
 * @param {any} [rowComponent="GridRow"] - Contains a custom row component, Default: `"GridRow"`
 * @param {string} [class=""] - CSS classes for parent table, Default: `""`
 *
 * ### Events
 * - `toggleSelectAll` - Fires an event every time the `select all` checkbox is toggled
 * - `rowClick`
 * - `rowSelectChecked`
 * - `_forwardEvent`
 */
export default class GridView extends SvelteComponentTyped<{
    class?: string;
    data?: any[];
    transition?: boolean;
    visualActivationOnClick?: boolean;
    activatedId?: any;
    clickableRows?: boolean;
    bulk_actions?: boolean;
    selectedIds?: any[];
    selectCheckboxColor?: string;
    selectCheckboxSize?: string;
    iteration_key?: string;
    columns?: {};
    is_striped?: boolean;
    is_narrow?: boolean;
    selectAll?: boolean;
    selectAllCheckboxColor?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
    valueTransformers?: {};
    classTransformers?: {};
    styleTransformers?: {};
    visibilityMap?: {};
    cellComponentMap?: {};
    rowComponent?: typeof GridRow;
}, {
    rowClick: any;
    rowSelectChecked: any;
    _forwardEvent: any;
    toggleSelectAll: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GridViewProps = typeof __propDef.props;
export type GridViewEvents = typeof __propDef.events;
export type GridViewSlots = typeof __propDef.slots;
import GridRow from "./GridRow.svelte";
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        data?: any[];
        transition?: boolean;
        visualActivationOnClick?: boolean;
        activatedId?: any;
        clickableRows?: boolean;
        bulk_actions?: boolean;
        selectedIds?: any[];
        selectCheckboxColor?: string;
        selectCheckboxSize?: string;
        iteration_key?: string;
        columns?: {};
        is_striped?: boolean;
        is_narrow?: boolean;
        selectAll?: boolean;
        selectAllCheckboxColor?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
        valueTransformers?: {};
        classTransformers?: {};
        styleTransformers?: {};
        visibilityMap?: {};
        cellComponentMap?: {};
        rowComponent?: typeof GridRow;
    };
    events: {
        rowClick: any;
        rowSelectChecked: any;
        _forwardEvent: any;
        toggleSelectAll: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=GridView.svelte.d.ts.map