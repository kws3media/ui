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
    [4, 5, 6, 8],
    [7, 8, 9, 7],
    [6, 5, 4, 3],
  ],
  labels: ["2021", "2022", "2023", "2024"],
  sets: [
    "Me",
    { name: "You", type: "line" },
    { name: "Her", type: "area" },
    "Them",
  ],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
  multiaxis: false,
};

export default {
  title: "Charts/Complex Charts/Single Axis (Mixed)",
  component: Chart,
  args: args,
};

export const SingleAxisMixed = {
  render: (args) => ({
    Component: MixedChartDecorator,
    props: args,
  }),

  name: "Single Axis (Mixed)",
  args: args,
};
