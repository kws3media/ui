<Chart
  {options}
  {colors}
  {data}
  {labels}
  {start_angle}
  {end_angle}
  {sparklines}
  {width}
  {height} />

<script>
  import { RadialChart as Chart } from "@kws3/ui";

  export let options = {},
    colors = null,
    data = [],
    labels = [],
    start_angle = 0,
    end_angle = 360,
    sparklines = false,
    width = "100%",
    height = "auto";
</script>
