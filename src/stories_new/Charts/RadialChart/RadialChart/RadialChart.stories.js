import { RadialChart } from "@kws3/ui";

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
let argTypes = {};

export default {
  title: "Charts/Radial Chart/Simple",
  component: RadialChart,
  args: args,
  argTypes: {},
  props: args,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
