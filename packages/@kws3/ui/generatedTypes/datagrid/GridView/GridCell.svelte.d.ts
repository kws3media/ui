/** @typedef {typeof __propDef.props}  GridCellProps */
/** @typedef {typeof __propDef.events}  GridCellEvents */
/** @typedef {typeof __propDef.slots}  GridCellSlots */
/**
 * @param {string} [column=""] - Name of the column in the DB, Default: `""`
 * @param {object} [row={}] - List of all values in a row, Default: `{}`
 * @param {object} [transforms={}] - Finds custom values for the column, Default: `{}`
 * @param {object} [classNames={}] - Finds CSS class for the column, Default: `{}`
 * @param {object} [styles={}] - Finds CSS styles for the column, Default: `{}`
 */
export default class GridCell extends SvelteComponentTyped<{
    row?: {};
    column?: string;
    transforms?: any;
    classNames?: any;
    styles?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GridCellProps = typeof __propDef.props;
export type GridCellEvents = typeof __propDef.events;
export type GridCellSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        row?: {};
        column?: string;
        transforms?: object;
        classNames?: object;
        styles?: object;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=GridCell.svelte.d.ts.map