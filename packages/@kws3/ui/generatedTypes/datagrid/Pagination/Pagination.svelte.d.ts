/** @typedef {typeof __propDef.props}  PaginationProps */
/** @typedef {typeof __propDef.events}  PaginationEvents */
/** @typedef {typeof __propDef.slots}  PaginationSlots */
/**
 * @param {object} [meta={}] - Object containing `total`, `count`, `limit` and `offset` values
 *
 * **DEPRECATED**: Use `total`, `count`, `limit` and `offset`  props instead, Default: `{}`
 * @param {number} [limit=0] - How many items are meant to be per page, Default: `0`
 * @param {number} [count=0] - How many items are actually in this page, Default: `0`
 * @param {number} [total=0] - Total number of items available, Default: `0`
 * @param {number} [offset=0] - Offset of the first item in this page, Default: `0`
 * @param {boolean} [showTotal=true] - Determines whether to show total or not, Default: `true`
 * @param {boolean} [showCurrent=true] - Determines whether to show current page details, Default: `true`
 * @param {boolean} [showPerPage=true] - Determines whether to show per page options, Default: `true`
 * @param {number} [maxVisiblePages=10] - Maximum number of consecutive pages to show in pagination after which a break is introduced in between them, Default: `10`
 * @param {string} [entityName="entries"] - String to display total entries, Default: `"entries"`
 * @param {''|'small'|'medium'|'large'} [size="small"] - Size of the pagination elements, Default: `"small"`
 * @param {boolean} [frame=false] - Determines whether to show pagination frame or not, Default: `false`
 * @param {string} [iconRight="chevron-right"] - Right navigation icon, Default: `"chevron-right"`
 * @param {string} [iconLeft="chevron-left"] - Left navigation icon, Default: `"chevron-left"`
 * @param {array} [perPageOptions=[]] - Displays the options for how many items to show per page, Default: `[]`
 * @method `goto(targetPage)` - Go to an arbitrary page number
 * @method `prev()` - Go to the previous page
 * @method `next()` - Go to the next page
 * @method `first()` - Go to the first page
 * @method `last()` - Go to the last page
 *
 * ### Events
 * - `setLimit` - Event used to set a new `limit`.
 *
 * *Event Data:* `{currentPage, newLimit}`
 * - `paginate` - Event triggered on pagination change with new `offset` and current `limit` values.
 *
 * *Event Data:* `{offset, limit}`
 */
export default class Pagination extends SvelteComponentTyped<{
    offset?: number;
    size?: import("../../internalTypes/type-defs").Sizes;
    meta?: {
        limit: number;
        total: number;
        count: number;
        offset: number;
    };
    limit?: number;
    count?: number;
    total?: number;
    showTotal?: boolean;
    showCurrent?: boolean;
    showPerPage?: boolean;
    maxVisiblePages?: number;
    entityName?: string;
    frame?: boolean;
    iconRight?: string;
    iconLeft?: string;
    perPageOptions?: number[];
    goto?: (targetPage: number) => void;
    prev?: () => void;
    next?: () => void;
    first?: () => void;
    last?: () => void;
}, {
    setLimit: CustomEvent<any>;
    paginate: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get goto(): (targetPage: number) => void;
    get prev(): () => void;
    get next(): () => void;
    get first(): () => void;
    get last(): () => void;
}
export type PaginationProps = typeof __propDef.props;
export type PaginationEvents = typeof __propDef.events;
export type PaginationSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        offset?: number;
        size?: import('../../internalTypes').SizeOptions;
        meta?: {
            limit: number;
            total: number;
            count: number;
            offset: number;
        };
        limit?: number;
        count?: number;
        total?: number;
        showTotal?: boolean;
        showCurrent?: boolean;
        showPerPage?: boolean;
        maxVisiblePages?: number;
        entityName?: string;
        frame?: boolean;
        iconRight?: string;
        iconLeft?: string;
        perPageOptions?: number[];
        goto?: (targetPage: number) => void;
        prev?: () => void;
        next?: () => void;
        first?: () => void;
        last?: () => void;
    };
    events: {
        setLimit: CustomEvent<any>;
        paginate: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Pagination.svelte.d.ts.map