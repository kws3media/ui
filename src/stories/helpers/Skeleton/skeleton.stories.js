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
import { Skeleton } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  class: "",
  lines: 1,
  width: "100%",
  height: "auto",
  radius: "0px",
  circle: false,
  color: "",
};

export default {
  title: "Helpers/Skeleton",
  component: Skeleton,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },
  },
};

export const Skeleton = {
  render: (args) => ({
    Component: Skeleton,
    props: args,
  }),

  name: "Skeleton",
  args: args,
};
