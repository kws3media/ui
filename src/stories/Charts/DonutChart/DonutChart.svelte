<Chart {options} {colors} {data} {labels} {width} {height} {sparklines} />

<script>
  //@ts-nocheck
  import { DonutChart as Chart } from "@kws3/ui";

  export let options = {},
    colors = null,
    data = [],
    labels = [],
    sparklines = false,
    width = "100%",
    height = "auto";
</script>
