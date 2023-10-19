import InitVariations from "./InitVariations.svelte";

let args = {};

let argTypes = {};

export default {
  title: "Helpers/Tooltips/2. Examples/2. Variations",
  component: InitVariations,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
