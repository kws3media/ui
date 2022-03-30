<!--
  @component


  @param {object} [options={}] - Chart options, see ApexCharts options for radial charts, Default: `{}`
  @param {array} [labels=[]] - Data labels, Default: `[]`
  @param {array} [data=[]] - Chart data, Default: `[]`
  @param {number} [start_angle=0] - Starting angle in degrees, Default: `0`
  @param {number} [end_angle=360] - Ending angle in degrees, Default: `360`
  @param {boolean} [sparklines=false] - Displays the chart as a sparkline chart.
These are charts with minimal UI and can be
squeezed into small spaces, Default: `false`
  @param {string} [width="100%"] - Chart width, supports CSS size strings, Default: `"100%"`
  @param {string} [height="auto"] - Chart height, supports CSS size strings, Default: `"auto"`
  @param {array} [colors=null] - Chart colors, can be modified globally in framework settings

Send an array of colors to override the default colors, or do not send anything to use the default colors, Default: `null`
  @param {array} [captured_events=[]] - String array of event names that will be captured and fired as svelte events.
This is to prevent unnecessary event subscriptions., Default: `[]`
  @param {string} [class=""] - CSS classes for container, Default: `""`
  @method `getInstance()` - Returns the ApexCharts instance

  ### Events
  - `animationEnd` - All chart events only fire when they are mentioned in `captured_events` list. See ApexChart Events https://apexcharts.com/docs/options/chart/events/ for full list of supported events.
  - `beforeMount`
  - `mounted`
  - `updated`
  - `mouseMove`
  - `mouseLeave`
  - `click`
  - `legendClick`
  - `markerClick`
  - `selection`
  - `dataPointSelection`
  - `dataPointMouseEnter`
  - `dataPointMouseLeave`
  - `beforeZoom`
  - `beforeResetZoom`
  - `zoomed`
  - `scrolled`
  - `brushScrolled`

-->
<!-- All chart events only fire when they are mentioned in `captured_events` list. See ApexChart Events https://apexcharts.com/docs/options/chart/events/ for full list of supported events. -->
<Chart
  bind:this={chart}
  on:animationEnd
  on:beforeMount
  on:mounted
  on:updated
  on:mouseMove
  on:mouseLeave
  on:click
  on:legendClick
  on:markerClick
  on:selection
  on:dataPointSelection
  on:dataPointMouseEnter
  on:dataPointMouseLeave
  on:beforeZoom
  on:beforeResetZoom
  on:zoomed
  on:scrolled
  on:brushScrolled
  class={__class}
  options={_options}
  series={_data}
  type="radialBar"
  {height}
  {width}
  {captured_events} />

<script>
  import { Chart } from "@kws3/ui";
  import { radialChartOptions, merge } from "./utils";
  import { defaultChartColors } from "../settings";

  /**
   * Chart options, see ApexCharts options for radial charts
   */
  export let options = {},
    /**
     * Data labels
     */
    labels = [],
    /**
     * Chart data
     */
    data = [],
    /**
     * Starting angle in degrees
     */
    start_angle = 0,
    /**
     * Ending angle in degrees
     */
    end_angle = 360,
    /**
     * Displays the chart as a sparkline chart.
     * These are charts with minimal UI and can be
     * squeezed into small spaces
     */
    sparklines = false,
    /**
     * Chart width, supports CSS size strings
     */
    width = "100%",
    /**
     * Chart height, supports CSS size strings
     */
    height = "auto",
    /**
     * Chart colors, can be modified globally in framework settings
     *
     * Send an array of colors to override the default colors, or do not send anything to use the default colors
     * @type {array}
     */
    colors = null,
    /**
     * String array of event names that will be captured and fired as svelte events.
     * This is to prevent unnecessary event subscriptions.
     */
    captured_events = [];

  /**
   * CSS classes for container
   */
  let klass = "";
  export { klass as class };

  let chart;
  /**
   * Returns the ApexCharts instance
   */
  export function getInstance() {
    return chart.getInstance();
  }

  let _data = [],
    _labels = [];

  $: __class =
    "kws-radial-chart " + `${sparklines ? "kws-sparklines" : ""} ` + klass;

  $: usedColors = colors
    ? colors
    : $defaultChartColors
    ? $defaultChartColors
    : [];

  $: data, normaliseData();
  $: labels, normaliseLabels();
  $: _options = merge(
    radialChartOptions(_labels, start_angle, end_angle, sparklines),
    Object.assign({}, { colors: usedColors }, options)
  );

  const normaliseData = () => {
    _data = data;
    if (!data) {
      _data = Array(labels.length || 0).fill(0);
    }
    if (!Array.isArray(data)) {
      _data = [data];
    }
  };

  const normaliseLabels = () => {
    _labels = labels;
    if (!Array.isArray(labels)) {
      _labels = [labels];
    }
  };
</script>
