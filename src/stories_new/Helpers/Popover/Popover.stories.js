import { Popover } from "@kws3/ui";
import PopoverDecorator from "./Popover.svelte";

let args = {
  icon: "info-circle",
  icon_color: "primary",
  icon_size: "small",
  trigger: "click",
  placement: "auto",
  interactive: false,
  external_target: null,
  max_width: "none",
  style: "",
  class: "",
};

let argTypes = {
  icon: {},
  icon_color: {
    control: { type: "select" },
  },
  icon_size: {
    control: { type: "select" },
  },
};

export default {
  title: "Helpers/Popover/1. Popover Component",
  component: Popover,
  decorators: [(_, { args }) => ({ Component: PopoverDecorator, props: args })],
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
