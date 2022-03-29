<LineChart
  options={options1}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  height={height1} />

<AreaChart
  options={options2}
  {colors}
  {data}
  {labels}
  {sets}
  {width}
  height={height2} />

<div class="columns">
  <div class="column content">
    <p>
      In this example, hovering over one chart will hilight the corresponding
      datapoints in the other charts.
    </p>
    <p>
      There seems to be a caveat to which types of charts can link together:
    </p>
    <ul>
      <li>Line and Area charts can be linked to each other.</li>
      <li>
        A bar chart can be linked to another bar chart, or a mixed chart only
      </li>
    </ul>
  </div>
  <div class="column content">
    <p>To enable this:</p>
    <ol>
      <li>
        Ensure a unique id is provided for each chart in <code
          >options.chart</code>
      </li>
      <li>
        Ensure a shared group name is provided for every linked chart in <code
          >options.chart</code>
      </li>
    </ol>
    <p>Code Example:</p>
    <pre>
&lt;LineChart options=&#123;&#123;
  chart:&#123;
    id:"chart1",
    group:"Sales"
  &#125;
&#125;&#125; /&gt;
&lt;AreaChart options=&#123;&#123;
  chart:&#123;
    id:"chart2",
    group:"Sales"
  &#125;
&#125;&#125; /&gt;
    </pre>
  </div>
</div>

<script>
  import { LineChart, AreaChart } from "@kws3/ui";

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
      markers: {
        size: 0,
      },
      stroke: {
        width: 2,
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
      markers: {
        size: 0,
      },
      stroke: {
        width: 1,
      },
    },
    data = [...Array(200)].map(() => (Math.random() * 200) | 0),
    labels = [...Array(200).keys()],
    sets = ["Set1"];
</script>
