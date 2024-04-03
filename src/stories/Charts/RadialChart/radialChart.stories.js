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
  data: 50,
  labels: "Progress",
  width: "100%",
  height: "400",
  start_angle: 0,
  end_angle: 360,
  sparklines: false,
  colors: null,
  options: {},
};

export default {
  title: "Charts/Radial Chart/Simple",
  component: Chart,
  args: args,
};

export const Simple = {
  render: (args) => ({
    Component: RadialChartDecorator,
    props: args,
  }),

  name: "Simple",
  args: args,
};
