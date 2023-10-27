import { Divider } from "@kws3/ui";
import DividerDecorator from "./Divider.svelte";

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
  },
  alignment: {
    control: "select",
  },
};

export default {
  title: "Helpers/Divider",
  component: Divider,
  decorators: [() => DividerDecorator],
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
