import { LineChart } from "@kws3/ui";

let args = {
  data: [
    [10, 20, 30, 90],
    [100, 200, 300, 900],
    [60, 50, 40, 30],
    [600, 500, 400, 300],
  ],
  labels: ["2021", "2022", "2023", "2024"],
  sets: ["Purchased", "Expense", "Sold", "Revenue"],
  width: "100%",
  height: "400",
  colors: null,
  sparklines: false,
  y_axis_options: {},
  options: {},
};
let argTypes = {};

export default {
  title: "Charts/Line Chart",
  component: LineChart,
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
