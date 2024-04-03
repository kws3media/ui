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
import { ClipboardCopier } from "@kws3/ui";
import ClipboardCopierDecorator from "./ClipboardCopier.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  copied_icon_color: "success",
  copied_text: "Copied!",
  copied_icon: "check",
  text: "Copy to clipboard",
  icon: "copy",
  copy: "This text will be copied to clipboard",
  copied: false,
  class: "",
};

export default {
  title: "Helpers/ClipboardCopier",
  component: ClipboardCopier,
  args: args,

  argTypes: {
    copied_icon_color: {
      control: {
        type: "select",
      },
    },
  },
};

export const ClipboardCopier = {
  render: (args) => ({
    Component: ClipboardCopierDecorator,
    props: args,
  }),

  name: "ClipboardCopier",
  args: args,
};
