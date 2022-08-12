<Chart
  {options}
  {y_axis_options}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  {height}
  {sparklines}
  {horizontal}
  {distributed}
  {stacked}
  {stacked_full_width} />

<script>
  //@ts-nocheck
  import { BarChart as Chart } from "@kws3/ui";

  export let colors = null,
    width = "100%",
    height = "auto",
    options = {},
    data = [],
    labels = [],
    y_axis_options = {},
    horizontal = false,
    distributed = false,
    stacked = false,
    stacked_full_width = false,
    sparklines = false,
    sets = [];
</script>
