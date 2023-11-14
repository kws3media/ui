import { ClipboardCopier } from "@kws3/ui";
import ClipboardCopierDecorator from "./ClipboardCopier.svelte";
import { Colors } from "../../../../scripts/type_injector/frameworkTypes";

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

let argTypes = {
  copied_icon_color: {
    control: { type: "select" },
    options: Colors,
  },
};

export default {
  title: "Helpers/ClipboardCopier",
  component: ClipboardCopier,
  decorators: [
    (_, { args }) => ({ Component: ClipboardCopierDecorator, props: args }),
  ],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
