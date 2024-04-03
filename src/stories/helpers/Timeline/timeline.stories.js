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
import { action } from "@storybook/addon-actions";

let args = {
  align: "left",
  class: "",
};

export default {
  title: "Helpers/Timeline",
  component: Timeline,
  args: args,

  argTypes: {
    align: {
      control: "select",
    },
  },
};

export const Timeline = {
  render: (args) => ({
    Component: Timeline,
    props: args,
  }),

  name: "Timeline",
  args: args,
};
