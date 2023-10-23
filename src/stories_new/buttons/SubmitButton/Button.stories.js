import { SubmitButton } from "@kws3/ui";
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

let argTypes = {
  color: {
    control: "select",
  },
  size: {
    control: "select",
  },
};

export default {
  title: "Buttons/Submit Button",
  component: SubmitButton,
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
  decorators: [() => ButtonDecorator],
};
