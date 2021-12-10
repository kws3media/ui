<Chart
  {options}
  {yAxisOptions}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  {height}
  {sparklines} />

<script>
  import { LineChart as Chart } from "@kws3/ui";

  export let colors = null,
    width = "100%",
    height = "auto",
    options = {},
    data = [],
    labels = [],
    yAxisOptions = {},
    sparklines = false,
    sets = [];
</script>
