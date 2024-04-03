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
import { ToggleControl } from "@kws3/ui";
import ToggleControlDecorator from "./ToggleControl.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  class: "",
  style: "",
  cy: "",
};

export default {
  title: "Forms/Controls/ToggleControl",
  component: ToggleControl,
  args: args,
};

export const ToggleControl = {
  render: (args) => ({
    Component: ToggleControlDecorator,
    props: args,

    on: {
      change: action("Changed"),
    },
  }),

  name: "ToggleControl",
  args: args,
};
