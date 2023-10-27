import { ConfirmButton } from "@kws3/ui";
import ButtonDecorator from "./ConfirmButton.svelte";
import playInteractions from "./Button.play.js";

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
  context: "_context_confirm",
  should_confirm: true,
  size: "",
  color: "primary",
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
  title: "Buttons/ConfirmButton",
  component: ConfirmButton,
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  name: "Preview",
  Component: ButtonDecorator,
  props: args,
  args: args,
});

export const Main = {
  tags: ["isHidden"],
  play: playInteractions,
  templates: [() => Template],
  decorators: [() => ButtonDecorator],
};
