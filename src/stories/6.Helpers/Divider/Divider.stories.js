import { Divider } from "@kws3/ui";
import DividerDecorator from "./Divider.svelte";
import { Colors, Positions } from "@scripts/type_injector/frameworkTypes";

let args = {
  color: "",
  light: false,
  vertical: false,
  alignment: "center",
  class: "",
  style: "",
};

let argTypes = {
  color: {
    control: "select",
    options: Colors,
  },
  alignment: {
    control: "select",
    options: Positions,
  },
};

export default {
  title: "Helpers/Divider",
  component: Divider,
  decorators: [(_, { args }) => ({ Component: DividerDecorator, props: args })],
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
