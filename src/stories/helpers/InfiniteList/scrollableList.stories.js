import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { InfiniteList } from "@kws3/ui";
import InfiniteListDecorator from "./InfiniteList.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  items: [],
  height: "400px",
  class: "",
  end_offset: 400,
  style: "",
};

export default {
  title: "Helpers/InfiniteList",
  component: InfiniteList,
  args: args,
  argTypes: {},
};

export const InfiniteList = {
  render: (args) => ({
    Component: InfiniteListDecorator,
    props: args,

    on: {
      end: action("Reached to end."),
    },
  }),

  name: "InfiniteList",
  args: args,
};
