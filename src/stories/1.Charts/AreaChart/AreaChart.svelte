<Chart
  {options}
  {y_axis_options}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  {height}
  {sparklines} />

<script>
  import { AreaChart as Chart } from "@kws3/ui";

  export let colors = null,
    width = "100%",
    height = "auto",
    options = {},
    data = [],
    labels = [],
    y_axis_options = {},
    sparklines = false,
    sets = [];
</script>
