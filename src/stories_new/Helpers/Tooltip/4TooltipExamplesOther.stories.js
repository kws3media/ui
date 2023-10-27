import Other from "./Other.svelte";

let args = {};

let argTypes = {};

export default {
  title: "Helpers/Tooltips/2. Examples/3. Other Examples",
  component: Other,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
