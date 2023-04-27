/** @typedef {typeof __propDef.props}  ChartProps */
/** @typedef {typeof __propDef.events}  ChartEvents */
/** @typedef {typeof __propDef.slots}  ChartSlots */
/**
 * @param {object} [options={}] - Chart options, Default: `{}`
 * @param {string} [type="bar"] - Chart type, Default: `"bar"`
 * @param {array} [series=[]] - Series data, Default: `[]`
 * @param {string} [width="100%"] - Chart width, Default: `"100%"`
 * @param {string} [height="auto"] - Chart height, Default: `"auto"`
 * @param {array} [captured_events=[]] - String array of event names that will be captured and fired as svelte events.
 * This is to prevent unnecessary event subscriptions., Default: `[]`
 * @param {string} [class=""] - CSS classes for container, Default: `""`
 * @method `getInstance()` - Returns the ApexCharts instance
 */
export default class Chart extends SvelteComponentTyped<{
    class?: string;
    width?: string;
    height?: string;
    options?: {};
    type?: string;
    series?: any[];
    captured_events?: any[];
    getInstance?: () => any;
}, {
    bar: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get getInstance(): () => any;
}
export type ChartProps = typeof __propDef.props;
export type ChartEvents = typeof __propDef.events;
export type ChartSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        width?: string;
        height?: string;
        options?: {};
        type?: string;
        series?: any[];
        captured_events?: any[];
        getInstance?: () => any;
    };
    events: {
        bar: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Chart.svelte.d.ts.map