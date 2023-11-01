import { Icon } from "@kws3/ui";
import IconDecorator from "./Icon.svelte";

let args = {
  family: "",
  size: "",
  color: "primary",
  icon: "bookmark",
  class: "",
  style: "",
  inner_class: "",
  inner_style: "",
};

let argTypes = {
  color: {
    control: { type: "select" },
  },
  size: {
    control: { type: "select" },
  },
  family: {
    control: { type: "select" },
  },
};

export default {
  title: "Helpers/Icon",
  component: Icon,
  decorators: [(_, { args }) => ({ Component: IconDecorator, props: args })],
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
