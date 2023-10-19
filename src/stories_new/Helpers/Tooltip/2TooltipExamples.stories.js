import DataAttributes from "./DataAttributes.svelte";

let args = {};

let argTypes = {};

export default {
  title: "Helpers/Tooltips/2. Examples/1. Data Attributes",
  component: DataAttributes,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
