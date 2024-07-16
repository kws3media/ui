import { PieChart } from "@kws3/ui";

let args = {
  data: [10, 10, 20, 60],
  labels: ["Me", "You", "Her", "Them"],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
};
let argTypes = {};

export default {
  title: "Charts/Pie Chart",
  component: PieChart,
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
