import { Dialog } from "@kws3/ui";
import DialogDecorator from "./Dialog.svelte";
import { Colors, Sizes } from "@scripts/type_injector/frameworkTypes";

let args = {
  title: "",
  help_text: "",
  size: "small",
  input_value: "",
  icon: "",
  icon_color: "primary",
  icon_size: "",
};

let argTypes = {
  title: {},
  help_text: {},
  size: {
    control: { type: "select" },
    options: Sizes,
  },
  input_value: {},
  icon: {},
  icon_color: {
    control: { type: "select" },
    options: Colors,
  },
  icon_size: {
    control: { type: "select" },
    options: Sizes,
  },
  ok_button_text: {},
  ok_button_color: {
    control: { type: "select" },
    options: Colors,
  },
  ok_button_icon: {},
  cancel_button_text: {},
  cancel_button_color: {
    control: { type: "select" },
    options: Colors,
  },
  cancel_button_icon: {},
};

export default {
  title: "Helpers/Dialog",
  component: Dialog,
  decorators: [(_, { args }) => ({ Component: DialogDecorator, props: args })],
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
