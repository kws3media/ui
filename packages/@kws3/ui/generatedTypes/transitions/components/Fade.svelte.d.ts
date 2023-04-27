/** @typedef {typeof __propDef.props}  FadeProps */
/** @typedef {typeof __propDef.events}  FadeEvents */
/** @typedef {typeof __propDef.slots}  FadeSlots */
/**
 * @param {object} [easing=null] - Easing property, Default: `null`
 * @param {number} [delay=0] - Delay property, Default: `0`
 * @param {number} [duration=300] - Duration property, Default: `300`
 * @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />`
 */
export default class Fade extends SvelteComponentTyped<{
    class?: string;
    duration?: number;
    delay?: number;
    easing?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FadeProps = typeof __propDef.props;
export type FadeEvents = typeof __propDef.events;
export type FadeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
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
//# sourceMappingURL=Fade.svelte.d.ts.map