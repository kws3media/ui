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
import { TimelineHeader } from "@kws3/ui";
import HeaderDecorator from "./TimelineHeader.svelte";
import { action } from "@storybook/addon-actions";

let args = {};

export default {
  title: "Helpers/Timeline/TimelineHeader",
  component: TimelineHeader,
  args: args,
};

export const TimelineHeader = {
  render: (args) => ({
    Component: HeaderDecorator,
    props: args,
  }),

  name: "TimelineHeader",
  args: args,
};
