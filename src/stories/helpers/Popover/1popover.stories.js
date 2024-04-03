import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { Popover } from "@kws3/ui";
import PopoverDecorator from "./Popover.svelte";
import { action } from "@storybook/addon-actions";

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

export default {
  title: "Helpers/Popover/1. Popover Component",
  component: Popover,
  args: args,

  argTypes: {
    icon: {},

    icon_color: {
      control: {
        type: "select",
      },
    },

    icon_size: {
      control: {
        type: "select",
      },
    },
  },
};

export const Popover = {
  render: (args) => ({
    Component: PopoverDecorator,
    props: args,
  }),

  name: "Popover",
  args: args,
};
