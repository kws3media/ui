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
import { Toggle } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  on: false,
  disabled: false,
  color: "",
  class: "",
  on_text: "",
  off_text: "",
  size: "",
  cy: "",
};

export default {
  title: "Forms/Controls/Toggle",
  component: Toggle,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },

    size: {
      control: "select",
    },
  },
};

export const Toggle = {
  render: (args) => ({
    Component: Toggle,
    props: args,

    on: {
      change: action("Changed"),
    },
  }),

  name: "Toggle",
  args: args,
};
