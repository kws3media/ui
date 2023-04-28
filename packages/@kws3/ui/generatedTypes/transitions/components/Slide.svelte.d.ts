/** @typedef {typeof __propDef.props}  SlideProps */
/** @typedef {typeof __propDef.events}  SlideEvents */
/** @typedef {typeof __propDef.slots}  SlideSlots */
/**
 * @param {object} [easing=null] - Easing property, Default: `null`
 * @param {number} [delay=0] - Delay property, Default: `0`
 * @param {number} [duration=300] - Duration property, Default: `300`
 * @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />`
 */
export default class Slide extends SvelteComponentTyped<{
    delay?: number;
    duration?: number;
    class?: string;
    easing?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SlideProps = typeof __propDef.props;
export type SlideEvents = typeof __propDef.events;
export type SlideSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        delay?: number;
        duration?: number;
        class?: string;
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
//# sourceMappingURL=Slide.svelte.d.ts.map