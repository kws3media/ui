<Chart options={_options} series={_data} type="donut" {height} {width} />

<script>
  import { Chart } from "@kws3/ui";
  import { donutChartOptions, merge } from "./utils";

  /**
   * Chart options, see ApexCharts options for donut charts
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
    height = "auto";

  $: _data = data || Array(labels.length || 0).fill(0);
  $: _options = merge(donutChartOptions(labels), options);
</script>
