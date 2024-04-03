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
import { Radio } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  value: null,
  class: "",
  style: "",
  label_style: "",
  size: "",
  color: "",
  inverted: false,
  circle: false,
  disabled: false,
  group: null,
};

export default {
  title: "Forms/Controls/Radio",
  component: Radio,
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

export const Radio = {
  render: (args) => ({
    Component: Radio,
    props: args,

    on: {
      change: action("Changed"),
    },
  }),

  name: "Radio",
  args: args,
};
