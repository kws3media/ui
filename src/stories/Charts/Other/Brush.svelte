<LineChart
  options={options1}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  height={height1} />

<BarChart
  options={options2}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  height={height2} />

<script>
  import { LineChart, BarChart } from "@kws3/ui";

  export let colors = null,
    width = "100%",
    height1 = "300",
    height2 = "100",
    options1 = {
      chart: {
        id: "itemsChart",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      xaxis: {
        decimalsInFloat: 0,
        tickAmount: 5,
        type: "numeric",
      },
    },
    options2 = {
      chart: {
        id: "brush",
        brush: {
          target: "itemsChart",
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: 50,
            max: 100,
          },
        },
      },
      xaxis: {
        type: "numeric",
        labels: { show: false },
      },
      yaxis: {
        tickAmount: 2,
      },
    },
    data = [...Array(200)].map(() => (Math.random() * 200) | 0),
    labels = [...Array(200).keys()],
    sets = ["Set1"];
</script>
