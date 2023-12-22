import Drill from "./Drill.svelte";

let args = {};
let argTypes = {};

export default {
  title: "Charts/Advanced Examples/Drilldown or Linked Charts",
  component: Drill,
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
