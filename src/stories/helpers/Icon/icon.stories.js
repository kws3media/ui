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
import { Icon } from "@kws3/ui";
import IconDecorator from "./Icon.svelte";
import { action } from "@storybook/addon-actions";

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

export default {
  title: "Helpers/Icon",
  component: Icon,
  args: args,

  argTypes: {
    color: {
      control: {
        type: "select",
      },
    },

    size: {
      control: {
        type: "select",
      },
    },

    family: {
      control: {
        type: "select",
      },
    },
  },
};

export const Icon = {
  render: (args) => ({
    Component: IconDecorator,
    props: args,
  }),

  name: "Icon",
  args: args,
};
