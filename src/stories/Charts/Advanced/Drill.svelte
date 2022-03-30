<div class="columns" class:double={showPie}>
  <div class="column first">
    <BarChart
      distributed
      on:dataPointSelection={dataPointSelectionToggle}
      options={options1}
      {colors}
      {data}
      {labels}
      {sets}
      {width}
      {height}
      captured_events={["dataPointSelection"]} />
    <p class="has-text-centered">Click on a bar to activate / deactivate it</p>
  </div>
  <div class="column second">
    {#if showPie}
      <h2 class="title is-5 has-text-centered is-marginless">{activeKey}</h2>
      <PieChart {height} options={options2} data={pieData} labels={pieLabels} />
    {/if}
  </div>
</div>

<style lang="scss">
  .columns {
    .first,
    .second {
      position: relative;
      z-index: 1;
      transition: transform 0.5s ease;
    }
    .first {
      transform: translateX(50%);
    }
    .second {
      z-index: -1;
      transform: translateX(-50%);
    }

    &.double {
      .first,
      .second {
        z-index: 1;
        transform: translateX(0);
      }
    }
  }
</style>

<script>
  import { PieChart, BarChart } from "@kws3/ui";

  let dataset = {
    Chrome: {
      color: "#284BED",
      value: (Math.random() * 200) | 0,
      breakdown: {
        Desktop: (Math.random() * 100) | 0,
        Mobile: (Math.random() * 100) | 0,
        Tablet: (Math.random() * 100) | 0,
      },
    },
    Safari: {
      color: "#ED6134",
      value: (Math.random() * 200) | 0,
      breakdown: {
        Desktop: (Math.random() * 100) | 0,
        Mobile: (Math.random() * 100) | 0,
        Tablet: (Math.random() * 100) | 0,
      },
    },
    Firefox: {
      color: "#1DAFEC",
      value: (Math.random() * 200) | 0,
      breakdown: {
        Desktop: (Math.random() * 100) | 0,
        Mobile: (Math.random() * 100) | 0,
        Tablet: (Math.random() * 100) | 0,
      },
    },
    IE: {
      color: "#EDB405",
      value: (Math.random() * 200) | 0,
      breakdown: {
        Desktop: (Math.random() * 100) | 0,
        Mobile: 0,
        Tablet: 0,
      },
    },
    Edge: {
      color: "#11EDB7",
      value: (Math.random() * 200) | 0,
      breakdown: {
        Desktop: (Math.random() * 100) | 0,
        Mobile: 0,
        Tablet: 0,
      },
    },
  };

  let pieData = [],
    pieLabels = [],
    showPie = false,
    activeKey = null;

  export let colors = Object.values(dataset).map((o) => o.color),
    width = "100%",
    height = "270",
    options1 = {
      states: {
        active: {
          filter: {
            type: "darken",
            value: 0.35,
          },
        },
      },
    },
    options2 = {
      theme: {
        monochrome: {
          enabled: true,
        },
      },
    },
    data = Object.values(dataset).map((o) => o.value),
    labels = Object.keys(dataset),
    sets = ["Visitor Browsers"];

  // eslint-disable-next-line no-unused-vars
  const dataPointSelectionToggle = ({ detail: [e, chart, dataPoint] }) => {
    if (
      dataPoint.selectedDataPoints &&
      dataPoint.selectedDataPoints.length === 1 &&
      typeof dataPoint.selectedDataPoints[0][0] != "undefined"
    ) {
      activeKey = labels[dataPoint.selectedDataPoints[0]];

      options2.theme.monochrome.color = dataset[activeKey].color;
      showPie = true;
      pieData = Object.values(dataset[activeKey].breakdown);
      pieLabels = Object.keys(dataset[activeKey].breakdown);
    } else {
      showPie = false;
      pieData = [];
      pieLabels = [];
    }
  };
</script>
