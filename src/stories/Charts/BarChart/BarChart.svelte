<Chart
  {options}
  {yAxisOptions}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  {height}
  {sparklines}
  {horizontal} />

<script>
  import { BarChart as Chart } from "@kws3/ui";

  export let colors = null,
    width = "100%",
    height = "auto",
    options = {},
    data = [],
    labels = [],
    yAxisOptions = {},
    horizontal = false,
    sparklines = false,
    sets = [];
</script>
