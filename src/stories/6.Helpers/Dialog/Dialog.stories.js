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
    control: "select",
    options: Sizes,
  },
  input_value: {},
  icon: {},
  icon_color: {
    control: "select",
    options: Colors,
  },
  icon_size: {
    control: "select",
    options: Sizes,
  },
  ok_button_text: {},
  ok_button_color: {
    control: "select",
    options: Colors,
  },
  ok_button_icon: {},
  cancel_button_text: {},
  cancel_button_color: {
    control: "select",
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
  args: args,
  argTypes: argTypes,
  props: args,
};
