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
import { RadialChart as Chart } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import RadialChartDecorator from "./RadialChart.svelte";

let args = {
  data: [70, 50, 40, 20],
  labels: ["Bought", "Sold", "Donated", "Discarded"],
  width: "100%",
  height: "400",
  start_angle: 0,
  end_angle: 360,
  sparklines: false,
  colors: null,
  options: {},
};

export default {
  title: "Charts/Radial Chart/Multiple",
  component: Chart,
  args: args,
};

export const Multiple = {
  render: (args) => ({
    Component: RadialChartDecorator,
    props: args,
  }),

  name: "Multiple",
  args: args,
};
