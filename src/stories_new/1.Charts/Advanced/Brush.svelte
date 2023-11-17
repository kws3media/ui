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
      height={height2} />
  {/if}
{/if}

<script>
  import { LineChart, BarChart } from "@kws3/ui";
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
    data = [...Array(200)]
      .map(() => (Math.random() * 200) | 0)
      .filter((num) => num !== 0),
    labels = data.map((_, index) => index),
    sets = data.map((value, index) => index);

  onMount(() => {
    setTimeout(() => {
      componentVisible = true;
    }, 3000);
  });
</script>
