import { BarChart } from "@kws3/ui";

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
  horizontal: false,
  distributed: false,
  stacked: true,
  stacked_full_width: true,
  y_axis_options: {},
  options: {},
};
let argTypes = {};

export default {
  title: "Charts/Bar Charts/Vertical Stacked Full Width",
  component: BarChart,
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
