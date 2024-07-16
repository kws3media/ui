import Brush from "./Brush.svelte";

let args = {};
let argTypes = {};

export default {
  title: "Charts/Advanced Examples/Brush Charts",
  component: Brush,
  args: args,
  argTypes: {},
  props: args,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        code: null,
      },
    },
  },
};

export const Main = {
  args: args,
  argTypes: argTypes,
  props: args,
};
