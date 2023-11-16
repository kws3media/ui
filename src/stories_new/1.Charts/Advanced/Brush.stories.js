import Brush from "./Brush.svelte";

let args = {};
let argTypes = {};

export default {
  title: "Charts/Advanced Examples/Brush Charts",
  component: Brush,
  args: args,
  argTypes: {},
  props: args,
};

export const Main = {
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
