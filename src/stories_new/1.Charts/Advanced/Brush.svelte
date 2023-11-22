{#if data.length}
  <LineChart
    options={options1}
    {colors}
    {data}
    {labels}
    {sets}
    height={height1} />

  {#if componentVisible}
    <AreaChart
      options={options2}
      {colors}
      {data}
      {labels}
      {sets}
      height={height2} />
  {:else}
    <Skeleton height="80px" />
  {/if}
{/if}

<script>
  import { LineChart, Skeleton, AreaChart } from "@kws3/ui";
  import { onMount } from "svelte";

  let componentVisible = false;

  export let colors = null,
    height1 = "250",
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
      colors: ["#546E7A"],
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
            min: 10,
            max: 40,
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
      colors: ["#008FFB"],
    },
    data = [...Array(200)]
      .map(() => (Math.random() * 200) | 0)
      .filter((num) => num !== 0),
    labels = data.map((_, index) => index),
    sets = ["Value"];

  onMount(() => {
    setTimeout(() => {
      componentVisible = true;
    }, 1000);
  });
</script>
