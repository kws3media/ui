<!--
  @component


  @param {object} [options={}] - Chart options, Default: `{}`
  @param {string} [type="bar"] - Chart type, Default: `"bar"`
  @param {array} [series=[]] - Series data, Default: `[]`
  @param {string} [width="100%"] - Chart width, Default: `"100%"`
  @param {string} [height="auto"] - Chart height, Default: `"auto"`
  @param {string} [class=""] - CSS classes for container, Default: `""`
  @method `getInstance()` - Returns the ApexCharts instance

-->
<div class="kws-chart {klass}" bind:this={canvas} />

<script>
  import { onMount, createEventDispatcher } from "svelte";
  import ApexCharts from "apexcharts/dist/apexcharts.esm";
  import { merge } from "./utils";

  const fire = createEventDispatcher();
  let canvas, chart;

  /**
   * Chart options
   */
  export let options = {},
    /**
     * Chart type
     */
    type = "bar",
    /**
     * Series data
     */
    series = [],
    /**
     * Chart width
     */
    width = "100%",
    /**
     * Chart height
     */
    height = "auto";

  /**
   * CSS classes for container
   */
  let klass = "";
  export { klass as class };

  /**
   * Returns the ApexCharts instance
   */
  export function getInstance() {
    return chart;
  }

  onMount(() => {
    init();
    return () => {
      chart && chart.destroy();
    };
  });

  $: width, height, type, refresh();
  $: series, seriesChanged();
  $: options, optionsChanged();

  const patchEvents = (evs) => {
    const events = {};
    if (typeof evs != "undefined") {
      for (var type in evs) {
        events[type] = (a, b, c) => {
          fire(type, [a, b, c]);
        };
      }
    }
    return events;
  };

  const init = () => {
    chart && chart.destroy();

    const newOptions = {
      chart: {
        type,
        height,
        width,
      },
      type,
      series,
    };

    var events = {};

    if (typeof options.chart.events != "undefined") {
      events = patchEvents(options.chart.events);
      options.chart.events = {};
    }

    const config = merge(options, newOptions);

    if (canvas) {
      config.chart.events = events;
      chart = new ApexCharts(canvas, config);
      chart.render();
    }
  };

  const refresh = () => {
    chart && chart.destroy();
    init();
  };

  const seriesChanged = () => {
    chart ? chart.updateSeries(series, true) : init();
  };

  const optionsChanged = () => {
    if (chart) {
      if (typeof options.chart.events != "undefined") {
        options.chart.events = patchEvents(options.chart.events);
      }
      chart.updateOptions(options, true);
    } else {
      init();
    }
    chart ? chart.updateOptions(options, true) : init();
  };
</script>
