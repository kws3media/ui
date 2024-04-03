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
import { SlidingPaneSet } from "@kws3/ui";
import SlidingpaneDecorator from "./SlidingPaneSet.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  class: "",
  style: "height:210px;",
  vertical: false,
};

export default {
  title: "Standalone/SlidingPane/SlidingPaneSet",
  component: SlidingPaneSet,
  args: args,
};

export const SlidingPaneSet = {
  render: (args) => ({
    Component: SlidingpaneDecorator,
    props: args,

    on: {
      heightChange: action("Changed"),
    },
  }),

  name: "SlidingPaneSet",
  args: args,
};
