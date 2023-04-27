/** @typedef {typeof __propDef.props}  FlyProps */
/** @typedef {typeof __propDef.events}  FlyEvents */
/** @typedef {typeof __propDef.slots}  FlySlots */
/**
 * @param {number} [x=0] - X property, Default: `0`
 * @param {number} [y=0] - Y property, Default: `0`
 * @param {object} [easing=null] - Easing property, Default: `null`
 * @param {number} [delay=0] - Delay property, Default: `0`
 * @param {number} [duration=300] - Duration property, Default: `300`
 * @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />`
 */
export default class Fly extends SvelteComponentTyped<{
    class?: string;
    duration?: number;
    delay?: number;
    x?: number;
    y?: number;
    easing?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FlyProps = typeof __propDef.props;
export type FlyEvents = typeof __propDef.events;
export type FlySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        duration?: number;
        delay?: number;
        x?: number;
        y?: number;
        easing?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Fly.svelte.d.ts.map