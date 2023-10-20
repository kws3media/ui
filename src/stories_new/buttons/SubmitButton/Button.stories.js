import ButtonDecorator from "./SubmitButton.svelte";

let args = {
  class: "",
  text: "Save Changes",
  icon: "save",
  icon_only: false,
  saved_text: "Saved",
  error_text: "Failed to Save",
  disabled: false,
  cy: "submit",
  tracker: {},
  color: "primary",
  size: "",
  completion_timeout: 600,
  error_timeout: 3000,
};

export default {
  title: "Buttons/Submit Button",
  component: ButtonDecorator,
  args: args,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: {},
};
