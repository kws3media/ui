import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { ConfirmButton as Button } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import ConfirmButtonDecorator from "./ConfirmButton.svelte";
import playInteractions from "./confirmButton.play.js";

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

export default {
  title: "Buttons/Confirm Button",
  component: Button,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },

    size: {
      control: "select",
    },
  },
};

export const ConfirmButton = {
  render: (args) => ({
    Component: ConfirmButtonDecorator,
    props: args,
  }),

  name: "Confirm Button",
  args: args,
  play: playInteractions,
};
