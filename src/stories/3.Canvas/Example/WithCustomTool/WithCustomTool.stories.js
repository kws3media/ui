import Decorator from "./WithCustomTool.svelte";

export default {
  title: "Canvas/Examples/With Custom Tool",
  component: Decorator,
  args: {
    pen_width: 2,
    eraser_width: 2,
  },
  argTypes: {},
};

export const Main = {
  args: {},
  argTypes: {},
};
