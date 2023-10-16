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
  decorators: [() => ToggleControlDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
