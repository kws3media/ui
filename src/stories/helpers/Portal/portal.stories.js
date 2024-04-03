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
import { Portal } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  target: "body",
};

export default {
  title: "Helpers/Portal",
  component: Portal,
  args: args,

  argTypes: {
    target: {
      control: "text",
    },
  },
};

export const Portal = {
  render: (args) => ({
    Component: Portal,
    props: args,
  }),

  name: "Portal",
  args: args,
};
