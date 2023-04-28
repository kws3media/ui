/** @typedef {typeof __propDef.props}  GridRowProps */
/** @typedef {typeof __propDef.events}  GridRowEvents */
/** @typedef {typeof __propDef.slots}  GridRowSlots */
/**
 * @param {number} [row_index=0] - Row index value, Default: `0`
 * @param {object} [row={}] - Contains all the column values in a row, Default: `{}`
 * @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
 * @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
 * @param {object} [isVisible={}] - Determines whether column is visible or not, Default: `{}`
 * @param {boolean} [clickableRows=false] - Determines whether the row is clickable or not, Default: `false`
 * @param {object} [transforms={}] - Contains all custom values for each columns, Default: `{}`
 * @param {object} [classNames={}] - Contails all CSS class for each column, Default: `{}`
 * @param {boolean} [transition=false] - Determines whether the row has transition effect or not, Default: `false`
 * @param {object} [styles={}] - Contains all CSS styles for each column, Default: `{}`
 * @param {array} [column_keys=[]] - Column keys, Default: `[]`
 * @param {boolean} [bulk_actions=false] - Determines if selecting multiple rows and doing multiple actions is allowed, Default: `false`
 * @param {boolean} [checked=false] - Determines whether the checkbox is checked or not, Default: `false`
 * @param {array} [selectedIds=[]] - List of unique IDs of all the selected rows, Default: `[]`
 * @param {Exclude<ColorOptions, 'success'>} [selectCheckboxColor=info] - Selected checkbox color, Default: `info`
 * @param {SizeOptions} [selectCheckboxSize=medium] - selected checkbox size, Default: `medium`
 * @param {function} [cellComponent()] - Custom cell component for a column
 *
 * ### Events
 * - `rowSelectChecked`
 * - `rowClick`
 * - `_forwardEvent`
 */
export default class GridRow extends SvelteComponentTyped<{
    row?: {};
    checked?: boolean;
    transition?: boolean;
    transforms?: any;
    classNames?: any;
    styles?: any;
    row_index?: number;
    visualActivationOnClick?: boolean;
    activatedId?: any;
    isVisible?: any;
    clickableRows?: boolean;
    column_keys?: any[];
    bulk_actions?: boolean;
    selectedIds?: any[];
    selectCheckboxColor?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
    selectCheckboxSize?: import("../../internalTypes/type-defs").Sizes;
    cellComponent?: () => any;
}, {
    _forwardEvent: any;
    rowSelectChecked: CustomEvent<any>;
    rowClick: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GridRowProps = typeof __propDef.props;
export type GridRowEvents = typeof __propDef.events;
export type GridRowSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        row?: {};
        checked?: boolean;
        transition?: boolean;
        transforms?: object;
        classNames?: object;
        styles?: object;
        row_index?: number;
        visualActivationOnClick?: boolean;
        activatedId?: any;
        isVisible?: object;
        clickableRows?: boolean;
        column_keys?: any[];
        bulk_actions?: boolean;
        selectedIds?: any[];
        selectCheckboxColor?: "" | "primary" | "warning" | "info" | "danger" | "dark" | "light";
        selectCheckboxSize?: import("../../internalTypes/type-defs").Sizes;
        cellComponent?: () => any;
    };
    events: {
        _forwardEvent: any;
        rowSelectChecked: CustomEvent<any>;
        rowClick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=GridRow.svelte.d.ts.map