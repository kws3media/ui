import { MixedChart } from "@kws3/ui";
//import MixedChartDecorator from "../MixedChart.svelte";

let args = {
  data: [
    [1, 2, 3, 9],
    [4, 5, 6, 8],
    [7, 8, 9, 7],
    [6, 5, 4, 3],
  ],
  labels: ["2021", "2022", "2023", "2024"],
  sets: ["Me", { name: "You" }, { name: "Her" }, "Them"],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
  multiaxis: false,
};
let argTypes = {};

export default {
  title: "Charts/Complex Charts/Single Axis (Simple)",
  component: MixedChart,
  //decorators: [() => MixedChartDecorator],
  args: args,
  argTypes: {},
  props: args,
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
