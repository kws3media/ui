<!--
  @component


  @param {object} [options={}] - Chart options, see ApexCharts options for bar charts, Default: `{}`
  @param {array} [labels=[]] - Data labels, Default: `[]`
  @param {array} [sets=[]] - Data sets, Default: `[]`
  @param {array} [data=[]] - Chart data, Default: `[]`
  @param {boolean} [sparklines=false] - Displays the chart as a sparkline chart.
These are charts with minimal UI and can be
squeezed into small spaces, Default: `false`
  @param {boolean} [multiaxis=false] - Whether the chart has multiple axes, Default: `false`
  @param {object} [y_axis_options={}] - Y Axis options, see ApexCharts options for Y Axis, Default: `{}`
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
  type="bar"
  {height}
  {width}
  {captured_events} />

<script>
  import { Chart } from "@kws3/ui";
  import { mixedChartOptions, merge } from "./utils";
  import { defaultChartColors } from "../settings";

  /**
   * Chart options, see ApexCharts options for bar charts
   */
  export let options = {},
    /**
     * Data labels
     */
    labels = [],
    /**
     * Data sets
     */
    sets = [],
    /**
     * Chart data
     */
    data = [],
    /**
     * Displays the chart as a sparkline chart.
     * These are charts with minimal UI and can be
     * squeezed into small spaces
     */
    sparklines = false,
    /**
     * Whether the chart has multiple axes
     */
    multiaxis = false,
    /**
     * Y Axis options, see ApexCharts options for Y Axis
     */
    y_axis_options = {},
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

  $: __class =
    "kws-mixed-chart " + `${sparklines ? "kws-sparklines" : ""} ` + klass;

  let _data = [];
  let yAxis = [];

  $: usedColors = colors
    ? colors
    : $defaultChartColors
    ? $defaultChartColors
    : [];

  $: data, sets, normaliseAll();
  $: _options = merge(
    mixedChartOptions(labels, multiaxis ? yAxis : yAxis[0], sparklines),
    Object.assign({}, { colors: usedColors }, options)
  );

  const normaliseAll = () => {
    if (data.length !== sets.length) {
      console.warn("Data and sets lengths do not match");
    }
    normaliseSets();
    normaliseData();
  };

  const normaliseSets = () => {
    yAxis = [];

    let _sets = sets || [],
      oppositeAxisApplied = false,
      mainSeriesName = null,
      oppositeSeriesName = null;

    _sets.forEach((set, idx) => {
      let __set = {};
      let obj = merge(
        {
          floating: false,
          opposite: false,
          decimalsInFloat: 0,
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: true,
          },
          labels: {
            show: true,
          },
        },
        y_axis_options
      );
      if (typeof set === "string") {
        __set = Object.assign(obj, {
          name: set,
          type: "column",
        });
      } else {
        __set = Object.assign(obj, { name: "set-" + idx, type: "column" }, set);
      }

      //series names cannot be random,
      //they have to be of one of the sets
      if (!mainSeriesName) {
        mainSeriesName = __set.name;
      }

      if (__set.opposite) {
        //hide extras axes on the opposite side
        if (!oppositeAxisApplied) {
          oppositeAxisApplied = true;
          if (!oppositeSeriesName) {
            oppositeSeriesName = __set.name;
          }
        } else {
          __set.show = false;
        }
      } else {
        //hide extras axes on the main side
        if (idx > 0) {
          __set.show = false;
        }
      }

      if (__set.forceDisplay) {
        __set.show = true;
      }

      //set a common series name based on axis..
      //so that scales for each axis are the same
      __set.seriesName = __set.opposite ? oppositeSeriesName : mainSeriesName;

      yAxis.push(__set);
    });
  };

  const normaliseData = () => {
    _data = [];

    //ensuring data is an array of arrays
    let sliced_data = (data || []).slice();
    if (!Array.isArray(sliced_data[0])) {
      sliced_data = [sliced_data];
    }

    sliced_data.forEach((set, idx) => {
      _data.push({
        name: yAxis[idx].name,
        type: yAxis[idx].type,
        data: set,
      });
    });
  };
</script>
