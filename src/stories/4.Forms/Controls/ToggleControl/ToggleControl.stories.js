import { ToggleControl } from "@kws3/ui";
import ToggleControlDecorator from "./ToggleControl.svelte";

let args = {
  class: "",
  style: "",
  cy: "",
};

let argTypes = {};

export default {
  title: "Forms/Controls/ToggleControl",
  component: ToggleControl,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
  decorators: [
    (_, { args }) => ({ Component: ToggleControlDecorator, props: args }),
  ],
};
