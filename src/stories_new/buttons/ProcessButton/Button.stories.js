import ButtonDecorator from "./ProcessButton.svelte";

let args = {
  class: "",
  button_class: "",
  text: "Click Me",
  icon: "check",
  icon_only: false,
  done_text: "Done",
  done_icon: "check",
  disabled: false,
  cy: "",
  context: "_context_process",
  size: "",
  color: "primary",
  completion_timeout: 600,
  error_timeout: 3000,
};

export default {
  title: "Buttons/Process Button",
  component: ButtonDecorator,
  args: args,
  argTypes: {},
};

export const Main = {
  args: args,
  argTypes: {},
};
