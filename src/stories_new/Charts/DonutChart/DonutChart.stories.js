import { DonutChart } from "@kws3/ui";
//import DonutChartDecorator from "./DonutChart.svelte";

let args = {
  data: [60, 20, 10, 10],
  labels: ["Me", "You", "Her", "Them"],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
};
let argTypes = {};

export default {
  title: "Charts/Donut Chart",
  component: DonutChart,
  //decorators: [() => DonutChartDecorator],
  args: args,
  argTypes: {},
  props: args,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
