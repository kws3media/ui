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
import { ScrollableList } from "@kws3/ui";
import ScrollableListDecorator from "./ScrollableList.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  items: [],
  start: 0,
  end: 0,
  height: "400px",
  item_height: null,
  class: "",
  end_threshold: 10,
  padding_threshold: 5,
  style: "",
};

export default {
  title: "Helpers/ScrollableList",
  component: ScrollableList,
  args: args,
  argTypes: {},
};

export const ScrollableList = {
  render: (args) => ({
    Component: ScrollableListDecorator,
    props: args,

    on: {
      end: action("Reached to end."),
    },
  }),

  name: "ScrollableList",
  args: args,
};
