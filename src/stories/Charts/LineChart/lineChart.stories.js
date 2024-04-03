import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { LineChart as Chart } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import LineChartDecorator from "./LineChart.svelte";

let args = {
  data: [
    [10, 20, 30, 90],
    [100, 200, 300, 900],
    [60, 50, 40, 30],
    [600, 500, 400, 300],
  ],
  labels: ["2021", "2022", "2023", "2024"],
  sets: ["Purchased", "Expense", "Sold", "Revenue"],
  width: "100%",
  height: "400",
  colors: null,
  sparklines: false,
  y_axis_options: {},
  options: {},
};

export default {
  title: "Charts/Line Chart",
  component: Chart,
  args: args,
};

export const LineChart = {
  render: (args) => ({
    Component: LineChartDecorator,
    props: args,
  }),

  name: "Line Chart",
  args: args,
};
