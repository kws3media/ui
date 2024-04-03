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
import { Divider } from "@kws3/ui";
import DividerDecorator from "./Divider.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  color: "",
  light: false,
  vertical: false,
  alignment: "center",
  class: "",
  style: "",
};

export default {
  title: "Helpers/Divider",
  component: Divider,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },

    alignment: {
      control: "select",
    },
  },
};

export const Divider = {
  render: (args) => ({
    Component: DividerDecorator,
    props: args,
  }),

  name: "Divider",
  args: args,
};
