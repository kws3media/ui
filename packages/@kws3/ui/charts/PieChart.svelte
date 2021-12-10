<!--
  @component


  @param {object} [options={}] - Chart options, see ApexCharts options for pie charts, Default: `{}`
  @param {array} [labels=[]] - Data labels, Default: `[]`
  @param {array} [data=[]] - Chart data, Default: `[]`
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
  type="pie"
  {height}
  {width} />

<script>
  import { Chart } from "@kws3/ui";
  import { pieChartOptions, merge } from "./utils";
  import { defaultChartColors } from "../settings";

  /**
   * Chart options, see ApexCharts options for pie charts
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

  $: __class = "kws-pie-chart " + klass;

  $: usedColors = colors
    ? colors
    : $defaultChartColors
    ? $defaultChartColors
    : [];

  $: _data = data || Array(labels.length || 0).fill(0);
  $: _options = merge(
    pieChartOptions(labels),
    Object.assign({}, { colors: usedColors }, options)
  );
</script>
