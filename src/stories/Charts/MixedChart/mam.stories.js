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
import { MixedChart as Chart } from "@kws3/ui";
import MixedChartDecorator from "./MixedChart.svelte";

let args = {
  data: [
    [1, 2, 3, 9],
    [100, 200, 300, 900],
    [6, 5, 4, 3],
    [600, 500, 400, 300],
  ],
  labels: ["2021", "2022", "2023", "2024"],
  sets: [
    "Purchased",
    { name: "Expense", type: "area", opposite: true },
    "Sold",
    { name: "Revenue", type: "line", opposite: true },
  ],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
  multiaxis: true,
};

export default {
  title: "Charts/Complex Charts/Multi Axis (Mixed)",
  component: Chart,
  args: args,
};

export const MultiAxisMixed = {
  render: (args) => ({
    Component: MixedChartDecorator,
    props: args,
  }),

  name: "Multi Axis (Mixed)",
  args: args,
};
