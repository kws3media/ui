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
import { DonutChart as Chart } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import DonutChartDecorator from "./DonutChart.svelte";

let args = {
  data: [60, 20, 10, 10],
  labels: ["Me", "You", "Her", "Them"],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
};

export default {
  title: "Charts/Donut Chart",
  component: Chart,
  args: args,
};

export const DonutChart = {
  render: (args) => ({
    Component: DonutChartDecorator,
    props: args,
  }),

  name: "Donut Chart",
  args: args,
};
