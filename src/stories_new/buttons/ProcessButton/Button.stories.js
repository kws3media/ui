import { ProcessButton } from "@kws3/ui";
import ButtonDecorator from "./ProcessButton.svelte";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

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

let argTypes = {
  color: {
    control: "select",
    options: Colors,
  },
  size: {
    control: "select",
    options: Sizes,
  },
};

export default {
  title: "Buttons/Process Button",
  component: ProcessButton,
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
  decorators: [(_, { args }) => ({ Component: ButtonDecorator, props: args })],
};
