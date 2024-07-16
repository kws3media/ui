import { MixedChart } from "@kws3/ui";

let args = {
  data: [
    [1, 2, 3, 9],
    [100, 200, 300, 900],
    [6, 5, 4, 3],
    [600, 500, 400, 300],
  ],
  labels: ["2021", "2022", "2023", "2024"],
  sets: [
    "Purchased",
    { name: "Expense", type: "area", opposite: true },
    "Sold",
    { name: "Revenue", type: "line", opposite: true },
  ],
  width: "100%",
  height: "400",
  sparklines: false,
  colors: null,
  options: {},
  multiaxis: true,
};
let argTypes = {};

export default {
  title: "Charts/Complex Charts/Multi Axis (Mixed)",
  component: MixedChart,
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
