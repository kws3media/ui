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
import { PieChart as Chart } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import PieChartDecorator from "./PieChart.svelte";

let args = {
  data: [10, 10, 20, 60],
  labels: ["Me", "You", "Her", "Them"],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
};

export default {
  title: "Charts/Pie Chart",
  component: Chart,
  args: args,
};

export const PieChart = {
  render: (args) => ({
    Component: PieChartDecorator,
    props: args,
  }),

  name: "Pie Chart",
  args: args,
};
