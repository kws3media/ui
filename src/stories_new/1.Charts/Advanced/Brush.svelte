{#if data.length}
  <LineChart
    options={options1}
    {colors}
    {data}
    {labels}
    {sets}
    height={height1} />

  {#if componentVisible}
    <BarChart
      options={options2}
      {colors}
      {data}
      {labels}
      {sets}
      height={height2}
      width="99.5%" />
  {:else}
    <Skeleton height="80px" />
  {/if}
{/if}

<script>
  import { LineChart, BarChart, Skeleton } from "@kws3/ui";
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
    },
    data = [...Array(100)]
      .map(() => (Math.random() * 100) | 0)
      .filter((num) => num !== 0),
    labels = data.map((_, index) => index),
    sets = ["Value"];

  onMount(() => {
    setTimeout(() => {
      componentVisible = true;
    }, 1000);
  });
</script>
