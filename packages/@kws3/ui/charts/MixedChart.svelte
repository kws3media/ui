<!--
  @component


  @param {object} [options={}] - Chart options, see ApexCharts options for bar charts, Default: `{}`
  @param {array} [labels=[]] - Data labels, Default: `[]`
  @param {array} [sets=[]] - Data sets, Default: `[]`
  @param {array} [data=[]] - Chart data, Default: `[]`
  @param {boolean} [sparklines=false] - Displays the chart as a sparkline chart
These are charts with minimal UI and can be
squeezed into small spaces, Default: `false`
  @param {boolean} [multiaxis=false] - Whether the chart has multiple axes, Default: `false`
  @param {object} [yAxisOptions={}] - Y Axis options, see ApexCharts options for Y Axis, Default: `{}`
  @param {string} [width="100%"] - Chart width, supports CSS size strings, Default: `"100%"`
  @param {string} [height="auto"] - Chart height, supports CSS size strings, Default: `"auto"`
  @param {array} [colors=null] - Chart colors, can be modified globally in framework settings

Send an array of colors to override the default colors, or do not send anything to use the default colors, Default: `null`
  @param {string} [class=""] - CSS classes for container, Default: `""`

-->
<Chart
  class={__class}
  options={_options}
  series={_data}
  type="bar"
  {height}
  {width} />

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
     * Displays the chart as a sparkline chart
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
    yAxisOptions = {},
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
    colors = null;

  /**
   * CSS classes for container
   */
  let klass = "";
  export { klass as class };

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
        yAxisOptions
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
