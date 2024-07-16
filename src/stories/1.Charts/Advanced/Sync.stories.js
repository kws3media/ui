import Sync from "./Sync.svelte";

let args = {};
let argTypes = {};

export default {
  title: "Charts/Advanced Examples/Synchronized Charts",
  component: Sync,
  args: args,
  argTypes: {},
  props: args,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
