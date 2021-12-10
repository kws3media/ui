<Chart
  {options}
  {yAxisOptions}
  {multiaxis}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
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
    yAxisOptions = {},
    multiaxis = false;
</script>
