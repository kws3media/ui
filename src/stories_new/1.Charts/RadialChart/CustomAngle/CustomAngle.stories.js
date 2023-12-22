import { RadialChart } from "@kws3/ui";
//import RadialChartDecorator from "../RadialChart.svelte";

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
let argTypes = {};

export default {
  title: "Charts/Radial Chart/Custom Angles",
  component: RadialChart,
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
