/** @typedef {typeof __propDef.props}  SkeletonProps */
/** @typedef {typeof __propDef.events}  SkeletonEvents */
/** @typedef {typeof __propDef.slots}  SkeletonSlots */
/**
 * @param {number} [lines=1] - @typedef {import(', Default: `1`
 * @param {string} [width="100%"] - CSS string denoting width of the Skeleton
 * **Examples:** `10px` | `5rem` | `100vh`, Default: `"100%"`
 * @param {string} [height="auto"] - CSS string denoting height of the Skeleton
 * **Examples:** `10px` | `5rem` | `100vh` | `auto`, Default: `"auto"`
 * @param {string} [radius="0px"] - CSS string denoting border-radius of the Skeleton
 * **Examples:** `10px` | `5rem`, Default: `"0px"`
 * @param {boolean} [circle=false] - Whether the Skeleton should be rendered as a circle.
 * If this is set to `true`, the `radius` property will be ignored., Default: `false`
 * @param {BGColorOptions} [color=] - Color of the Skeleton lines, Default: ``
 * @param {string} [class=""] - CSS class for Skeleton, Default: `""`
 */
export default class Skeleton extends SvelteComponentTyped<{
    class?: string;
    color?: "" | "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light" | "transparent" | "link";
    lines?: number;
    width?: string;
    height?: string;
    radius?: string;
    circle?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SkeletonProps = typeof __propDef.props;
export type SkeletonEvents = typeof __propDef.events;
export type SkeletonSlots = typeof __propDef.slots;
export type Skeleton = any;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        color?: "" | "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light" | "transparent" | "link";
        lines?: number;
        width?: string;
        height?: string;
        radius?: string;
        circle?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Skeleton.svelte.d.ts.map