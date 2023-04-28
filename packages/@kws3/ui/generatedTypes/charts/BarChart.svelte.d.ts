/** @typedef {typeof __propDef.props}  BarChartProps */
/** @typedef {typeof __propDef.events}  BarChartEvents */
/** @typedef {typeof __propDef.slots}  BarChartSlots */
/**
 * @param {object} [options={}] - Chart options, see ApexCharts options for bar charts, Default: `{}`
 * @param {array} [labels=[]] - Data labels, Default: `[]`
 * @param {array} [sets=[]] - Data sets, Default: `[]`
 * @param {array} [data=[]] - Chart data, Default: `[]`
 * @param {boolean} [sparklines=false] - Displays the chart as a sparkline chart.
 * These are charts with minimal UI and can be
 * squeezed into small spaces, Default: `false`
 * @param {boolean} [horizontal=false] - Whether the chart displays horizontal bars, Default: `false`
 * @param {boolean} [distributed=false] - Make bars discrete. Each value indicates one bar per series., Default: `false`
 * @param {boolean} [stacked=false] - Whether the bars are stacked on top of each other, Default: `false`
 * @param {boolean} [stacked_full_width=false] - When bars are stacked, should they span the full width/height of the chart, Default: `false`
 * @param {object} [y_axis_options={}] - Y Axis options, see ApexCharts options for Y Axis, Default: `{}`
 * @param {string} [width="100%"] - Chart width, supports CSS size strings, Default: `"100%"`
 * @param {string} [height="auto"] - Chart height, supports CSS size strings, Default: `"auto"`
 * @param {array} [colors=[]] - Chart colors, can be modified globally in framework settings
 *
 * Send an array of colors to override the default colors, or do not send anything to use the default colors, Default: `[]`
 * @param {array} [captured_events=[]] - String array of event names that will be captured and fired as svelte events.
 * This is to prevent unnecessary event subscriptions., Default: `[]`
 * @param {string} [class=""] - CSS classes for container, Default: `""`
 * @method `getInstance()` - Returns the ApexCharts instance
 *
 * ### Events
 * - `animationEnd` - All chart events only fire when they are mentioned in `captured_events` list. See ApexChart Events https://apexcharts.com/docs/options/chart/events/ for full list of supported events.
 * - `beforeMount`
 * - `mounted`
 * - `updated`
 * - `mouseMove`
 * - `mouseLeave`
 * - `click`
 * - `legendClick`
 * - `markerClick`
 * - `selection`
 * - `dataPointSelection`
 * - `dataPointMouseEnter`
 * - `dataPointMouseLeave`
 * - `beforeZoom`
 * - `beforeResetZoom`
 * - `zoomed`
 * - `scrolled`
 * - `brushScrolled`
 */
export default class BarChart extends SvelteComponentTyped<{
    class?: string;
    width?: string;
    height?: string;
    data?: any[];
    options?: {};
    distributed?: boolean;
    captured_events?: any[];
    getInstance?: () => any;
    colors?: any[];
    labels?: any[];
    sparklines?: boolean;
    sets?: any[];
    y_axis_options?: {};
    horizontal?: boolean;
    stacked?: boolean;
    stacked_full_width?: boolean;
}, {
    animationEnd: any;
    beforeMount: any;
    mounted: any;
    updated: any;
    mouseMove: any;
    mouseLeave: any;
    click: any;
    legendClick: any;
    markerClick: any;
    selection: any;
    dataPointSelection: any;
    dataPointMouseEnter: any;
    dataPointMouseLeave: any;
    beforeZoom: any;
    beforeResetZoom: any;
    zoomed: any;
    scrolled: any;
    brushScrolled: any;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get getInstance(): () => any;
}
export type BarChartProps = typeof __propDef.props;
export type BarChartEvents = typeof __propDef.events;
export type BarChartSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        width?: string;
        height?: string;
        data?: any[];
        options?: {};
        distributed?: boolean;
        captured_events?: any[];
        getInstance?: () => any;
        colors?: any[];
        labels?: any[];
        sparklines?: boolean;
        sets?: any[];
        y_axis_options?: {};
        horizontal?: boolean;
        stacked?: boolean;
        stacked_full_width?: boolean;
    };
    events: {
        animationEnd: any;
        beforeMount: any;
        mounted: any;
        updated: any;
        mouseMove: any;
        mouseLeave: any;
        click: any;
        legendClick: any;
        markerClick: any;
        selection: any;
        dataPointSelection: any;
        dataPointMouseEnter: any;
        dataPointMouseLeave: any;
        beforeZoom: any;
        beforeResetZoom: any;
        zoomed: any;
        scrolled: any;
        brushScrolled: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=BarChart.svelte.d.ts.map