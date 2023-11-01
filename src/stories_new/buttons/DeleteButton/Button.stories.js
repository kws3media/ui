import { DeleteButton } from "@kws3/ui";
import ButtonDecorator from "./DeleteButton.svelte";

let args = {
  class: "",
  button_class: "",
  text: "Delete Me",
  icon: "minus-circle",
  icon_only: false,
  done_text: "Deleted",
  done_icon: "check",
  disabled: false,
  cy: "",
  context: "_context_delete",
  color: "danger",
  size: "",
  completion_timeout: 600,
  error_timeout: 3000,
};

let argTypes = {
  color: {
    control: "select",
  },
  size: {
    control: "select",
  },
};

export default {
  title: "Buttons/Delete Button",
  component: DeleteButton,
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
  decorators: [(_, { args }) => ({ Component: ButtonDecorator, props: args })],
  argTypes: argTypes,
};
