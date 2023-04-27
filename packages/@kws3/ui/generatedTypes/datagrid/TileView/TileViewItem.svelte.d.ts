/** @typedef {typeof __propDef.props}  TileViewItemProps */
/** @typedef {typeof __propDef.events}  TileViewItemEvents */
/** @typedef {typeof __propDef.slots}  TileViewItemSlots */
/**
 * @param {object} [row={}] - List of all values in a row, Default: `{}`
 * @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
 * @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
 * @param {boolean} [clickableRows=false] - Determines whether the row is clickable or not, Default: `false`
 * @param {function} [isVisible()] - Returns whether a column can be visible or not
 * @param {function} [transforms()] - Returns column custom value
 * @param {function} [classNames()] - Returns column custom CSS class
 * @param {function} [styles()] - Returns column custom CSS styles
 * @param {array} [column_keys=[]] - Contains all the column key names, Default: `[]`
 *
 * ### Events
 * - `rowClick` - Fires an event when a row is clicked
 */
export default class TileViewItem extends SvelteComponentTyped<{
    row?: {};
    transforms?: Function;
    classNames?: Function;
    styles?: Function;
    visualActivationOnClick?: boolean;
    activatedId?: any;
    isVisible?: Function;
    clickableRows?: boolean;
    column_keys?: any[];
}, {
    rowClick: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TileViewItemProps = typeof __propDef.props;
export type TileViewItemEvents = typeof __propDef.events;
export type TileViewItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        row?: {};
        transforms?: Function;
        classNames?: Function;
        styles?: Function;
        visualActivationOnClick?: boolean;
        activatedId?: any;
        isVisible?: Function;
        clickableRows?: boolean;
        column_keys?: any[];
    };
    events: {
        rowClick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=TileViewItem.svelte.d.ts.map