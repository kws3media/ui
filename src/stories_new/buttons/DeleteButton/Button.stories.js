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

export default {
  title: "Buttons/Delete Button",
  component: ButtonDecorator,
  args: args,
  argTypes: {},
};

export const Main = {
  args: args,
  argTypes: {},
};
