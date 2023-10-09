import Decorator from "./WithCustomTool.svelte";

let args = {};

export default {
  title: "Canvas/Examples/With Custom Tool",
  component: Decorator,
  args: args,
  argTypes: {},
};

export const Main = {
  args: args,
  argTypes: {},
};


// export const Default = () => ({
//   Component: Decorator,
//   props: {},
// });