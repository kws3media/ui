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
import { Nl2br } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  text: "This is a sample text\nAnd this is new line",
};

export default {
  title: "Helpers/Nl2br",
  component: Nl2br,
  args: args,
};

export const Nl2Br = {
  render: (args) => ({
    Component: Nl2br,
    props: args,
  }),

  name: "Nl2br",
  args: args,
};
