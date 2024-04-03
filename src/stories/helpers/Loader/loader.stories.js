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
import { Loader } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  spinner_color: "grey",
  spinner_size: "medium",
  background_color: "transparent",
  background_size: "medium",
  class: "",
  style: "",
  is_inline: false,
  has_overlay: false,
};

export default {
  title: "Helpers/Loader",
  component: Loader,
  args: args,

  argTypes: {
    spinner_color: {
      control: "select",
    },

    spinner_size: {
      control: "select",
    },

    background_color: {
      control: "select",
    },
  },
};

export const Loader = {
  render: (args) => ({
    Component: Loader,
    props: args,
  }),

  name: "Loader",
  args: args,
};
