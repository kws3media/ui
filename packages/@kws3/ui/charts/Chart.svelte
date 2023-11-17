<!--
  @component


  @param {object} [options={}] - Chart options, Default: `{}`
  @param {string} [type="bar"] - Chart type, Default: `"bar"`
  @param {array} [series=[]] - Series data, Default: `[]`
  @param {string} [width="100%"] - Chart width, Default: `"100%"`
  @param {string} [height="auto"] - Chart height, Default: `"auto"`
  @param {array} [captured_events=[]] - String array of event names that will be captured and fired as svelte events.
This is to prevent unnecessary event subscriptions., Default: `[]`
  @param {string} [class=""] - CSS classes for container, Default: `""`
  @method `getInstance()` - Returns the ApexCharts instance

-->
<div class="kws-chart {klass}" bind:this={canvas} />

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { merge } from "./utils";

  const fire = createEventDispatcher();
  let canvas, chart;

  let ApexCharts;

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
    height = "auto",
    /**
     * String array of event names that will be captured and fired as svelte events.
     * This is to prevent unnecessary event subscriptions.
     */
    captured_events = [];

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

  const supported_events = [
    "animationEnd",
    "beforeMount",
    "mounted",
    "updated",
    "mouseMove",
    "mouseLeave",
    "click",
    "legendClick",
    "markerClick",
    "selection",
    "dataPointSelection",
    "dataPointMouseEnter",
    "dataPointMouseLeave",
    "beforeZoom",
    "beforeResetZoom",
    "zoomed",
    "scrolled",
    "brushScrolled",
  ];

  onMount(async () => {
    const module = await import("apexcharts/dist/apexcharts.esm");
    ApexCharts = module.default;
    window.ApexCharts = ApexCharts;
    init();
  });

  onDestroy(() => {
    if (chart) chart.destroy();
  });

  let Events;

  $: width, height, type, refresh();
  $: series, seriesChanged();
  $: options, Events, optionsChanged();
  $: captured_events, patchEvents();

  const patchEvents = () => {
    const events = {};
    supported_events.forEach((type) => {
      if (captured_events && captured_events.indexOf(type) > -1) {
        events[type] = (a, b, c) => {
          fire(type, [a, b, c]);
        };
      }
    });
    Events = events;
  };

  const init = () => {
    chart && chart.destroy();

    if (typeof window !== "undefined") {
      if (!window.ApexCharts) {
        window.ApexCharts = ApexCharts;
      }
    }

    const newOptions = {
      chart: {
        type,
        height,
        width,
        events: Events,
      },
      type,
      series,
    };

    //replace any user sent events with patched events
    if (typeof options.chart.events != "undefined") {
      options.chart.events = {};
    }

    const config = merge(options, newOptions);

    if (canvas) {
      chart = new ApexCharts(canvas, config);
      //@ts-ignore
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
      if (typeof options.chart.events !== "undefined") {
        options.chart.events = Events;
      }
      chart.updateOptions(options, true);
    } else {
      init();
    }
  };
</script>
