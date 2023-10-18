import { Dialog } from "@kws3/ui";
import DialogDecorator from "./Dialog.svelte";

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
  },
  input_value: {},
  icon: {},
  icon_color: {
    control: { type: "select" },
  },
  icon_size: {
    control: { type: "select" },
  },
  ok_button_text: {},
  ok_button_color: {
    control: { type: "select" },
  },
  ok_button_icon: {},
  cancel_button_text: {},
  cancel_button_color: {
    control: { type: "select" },
  },
  cancel_button_icon: {},
};

export default {
  title: "Helpers/Dialog",
  component: Dialog,
  decorators: [() => DialogDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
