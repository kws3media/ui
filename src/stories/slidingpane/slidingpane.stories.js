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
import { SlidingPane } from "@kws3/ui";
import SlidingpaneDecorator from "./Slidingpane.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  active: false,
  class: "",
  style: "",
  v_center: true,
  h_center: true,
  track_height: true,
};

export default {
  title: "Standalone/SlidingPane",
  component: SlidingPane,
  args: args,
};

export const SlidingPane = {
  render: (args) => ({
    Component: SlidingpaneDecorator,
    props: args,

    on: {
      heightChange: action("Changed"),
    },
  }),

  name: "SlidingPane",
  args: args,
};
