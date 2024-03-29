import { Popover } from "@kws3/ui";
import PopoverDecorator from "./Popover.svelte";
import {
  Colors,
  Sizes,
  TippyPositions,
} from "@scripts/type_injector/frameworkTypes";

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
  hide_on_click: false,
};

let argTypes = {
  icon: {},
  icon_color: {
    control: { type: "select" },
    options: Colors,
  },
  icon_size: {
    control: { type: "select" },
    options: Sizes,
  },
  placement: {
    control: { type: "select" },
    options: TippyPositions,
  },
};

export default {
  title: "Helpers/Popover/1. Popover Component",
  component: Popover,
  decorators: [(_, { args }) => ({ Component: PopoverDecorator, props: args })],
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
