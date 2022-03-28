<div class="columns">
  <div class="column">
    <LineChart
      options={options1}
      {colors}
      data={data1}
      labels={labels1}
      sets={sets1}
      {width}
      {height} />

    <AreaChart
      options={options2}
      colors={["#006b3e"]}
      data={data2}
      labels={labels2}
      sets={sets2}
      {width}
      {height} />

    <AreaChart
      options={options3}
      colors={["#ff0000"]}
      data={data3}
      labels={labels3}
      sets={sets3}
      {width}
      {height} />
  </div>
  <div class="column">
    <BarChart
      options={options1}
      {colors}
      data={data1}
      labels={labels1}
      sets={sets1}
      {width}
      {height} />

    <BarChart
      options={options2}
      colors={["#006b3e"]}
      data={data2}
      labels={labels2}
      sets={sets2}
      {width}
      {height} />

    <BarChart
      options={options3}
      colors={["#ff0000"]}
      data={data3}
      labels={labels3}
      sets={sets3}
      {width}
      {height} />
  </div>
</div>

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
      <li>A bar chart can be linked to another bar chart only</li>
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
    <p>Example:</p>
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
  import { LineChart, AreaChart, BarChart } from "@kws3/ui";

  export let colors = null,
    width = "100%",
    height = "150",
    options1 = { chart: { group: "group1", id: "items" } },
    options2 = { chart: { group: "group1", id: "moneyout" } },
    options3 = { chart: { group: "group1", id: "moneyin" } },
    data1 = [1, 2, 3, 9],
    labels1 = ["2021", "2022", "2023", "2024"],
    sets1 = ["Number Of Units Sold"],
    data2 = [100, 600, 300, 400],
    labels2 = ["2021", "2022", "2023", "2024"],
    sets2 = ["Incoming Revenue"],
    data3 = [50, 20, 10, 64],
    labels3 = ["2021", "2022", "2023", "2024"],
    sets3 = ["Expenses"];
</script>
