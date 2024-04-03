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
import { MaskedInput } from "@kws3/ui";
import MaskedInputDecorator from "./MaskedInput.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  mask: [],
  placeholder_char: "_",
  guide: true,
  guide_when_empty: false,
  guide_on_output: false,
  keep_char_positions: false,
  placeholder: "",
  class: "",
  value: "",
};

export default {
  title: "Forms/MaskedInput",
  component: MaskedInput,
  args: args,
};

export const MaskedInput = {
  render: (args) => ({
    Component: MaskedInputDecorator,
    props: args,

    on: {
      change: action("change"),
    },
  }),

  name: "MaskedInput",
  args: args,
};
