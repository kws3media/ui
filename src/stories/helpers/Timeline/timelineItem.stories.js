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
import { TimelineItem } from "@kws3/ui";
import ItemDecorator from "./TimelineItem.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  marker_icon: null,
  marker_image: null,
  color: "",
};

export default {
  title: "Helpers/Timeline/TimelineItem",
  component: TimelineItem,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },
  },
};

export const TimelineItem = {
  render: (args) => ({
    Component: ItemDecorator,
    props: args,
  }),

  name: "TimelineItem",
  args: args,
};
