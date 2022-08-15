<Chart
  {options}
  {y_axis_options}
  {multiaxis}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  {sparklines}
  {height} />

<script>
  import { MixedChart as Chart } from "@kws3/ui";

  export let colors = null,
    width = "100%",
    height = "auto",
    options = {},
    data = [],
    labels = [],
    sets = [],
    y_axis_options = {},
    sparklines = false,
    multiaxis = false;
</script>
