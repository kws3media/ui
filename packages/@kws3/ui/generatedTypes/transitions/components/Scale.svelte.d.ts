/** @typedef {typeof __propDef.props}  ScaleProps */
/** @typedef {typeof __propDef.events}  ScaleEvents */
/** @typedef {typeof __propDef.slots}  ScaleSlots */
/**
 * @param {number} [from=0.5] - From property, Default: `0.5`
 * @param {number} [to=1] - To property, Default: `1`
 * @param {object} [easing=null] - Easing property, Default: `null`
 * @param {number} [delay=0] - Delay property, Default: `0`
 * @param {number} [duration=300] - Duration property, Default: `300`
 * @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />`
 */
export default class Scale extends SvelteComponentTyped<{
    class?: string;
    from?: number;
    to?: number;
    duration?: number;
    delay?: number;
    easing?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ScaleProps = typeof __propDef.props;
export type ScaleEvents = typeof __propDef.events;
export type ScaleSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        from?: number;
        to?: number;
        duration?: number;
        delay?: number;
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
//# sourceMappingURL=Scale.svelte.d.ts.map