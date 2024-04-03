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
  data: 70,
  labels: "Progress",
  width: "100%",
  height: "400",
  start_angle: -135,
  end_angle: 135,
  sparklines: false,
  colors: null,
  options: {},
};

export default {
  title: "Charts/Radial Chart/Custom Angles",
  component: Chart,
  args: args,
};

export const CustomAngles = {
  render: (args) => ({
    Component: RadialChartDecorator,
    props: args,
  }),

  name: "Custom Angles",
  args: args,
};
