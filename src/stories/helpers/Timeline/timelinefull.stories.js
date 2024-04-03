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
import { Timeline } from "@kws3/ui";
import FullDecorator from "./Timeline.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  align: "left",
  class: "",
};

export default {
  title: "Helpers/Timeline/Timeline Full Example",
  component: Timeline,
  args: args,

  argTypes: {
    align: {
      control: "select",
    },
  },
};

export const TimelineFullExample = {
  render: (args) => ({
    Component: FullDecorator,
    props: args,
  }),

  name: "Timeline Full Example",
  args: args,
};
