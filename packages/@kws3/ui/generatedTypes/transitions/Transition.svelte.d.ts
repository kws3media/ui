/** @typedef {typeof __propDef.props}  TransitionProps */
/** @typedef {typeof __propDef.events}  TransitionEvents */
/** @typedef {typeof __propDef.slots}  TransitionSlots */
/**
 * @param {number} [x=0] - X position on transition start, used for `fly` transitions, Default: `0`
 * @param {number} [y=0] - Y position on transition start, used for `fly` transitions, Default: `0`
 * @param {number} [from=0.5] - Starting scale, used for `scale` transitions, Default: `0.5`
 * @param {number} [to=1] - Final scale, used for `scale` transitions, Default: `1`
 * @param {boolean} [transition=true] - If `false`, transition animations will not run, and behave like a static element., Default: `true`
 * @param {'fly'|'fade'|'scale'|'slide'} [type="fly"] - Transition types., Default: `"fly"`
 * @param {number} [duration=300] - Duration of the transition in milliseconds, Default: `300`
 * @param {number} [delay=0] - Delays the start of the transition - in milliseconds, Default: `0`
 * @param {string} [easing="sineOut"] - Specifies the easing function to be used
 *
 * Defaults to `sineOut` if left empty
 *
 * `cubicOut` | `sineOut` | `elasticOut` | `expoOut` | `circOut` | `bounceOut` | `backOut`, Default: `"sineOut"`
 * @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`
 *
 * ### Slots
 * - `<slot name="default"  />` - Used to display content
 */
export default class Transition extends SvelteComponentTyped<{
    class?: string;
    from?: number;
    to?: number;
    duration?: number;
    delay?: number;
    x?: number;
    y?: number;
    easing?: string;
    transition?: boolean;
    type?: "scale" | "fly" | "fade" | "slide";
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TransitionProps = typeof __propDef.props;
export type TransitionEvents = typeof __propDef.events;
export type TransitionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        from?: number;
        to?: number;
        duration?: number;
        delay?: number;
        x?: number;
        y?: number;
        easing?: string;
        transition?: boolean;
        type?: 'fly' | 'fade' | 'scale' | 'slide';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
//# sourceMappingURL=Transition.svelte.d.ts.map