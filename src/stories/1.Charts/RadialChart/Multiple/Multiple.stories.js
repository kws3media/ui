import { RadialChart } from "@kws3/ui";

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
let argTypes = {};

export default {
  title: "Charts/Radial Chart/Multiple",
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
  args: args,
  argTypes: argTypes,
  props: args,
};
