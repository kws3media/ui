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
import { SubmitButton } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import SubmitButtonDecorator from "./SubmitButton.svelte";
import playInteractions from "./submitButton.play.js";

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
  component: SubmitButton,
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

export const SubmitButton = {
  render: (args) => ({
    Component: SubmitButtonDecorator,
    props: args,
  }),

  name: "Submit Button",
  args: args,
  play: playInteractions,
};
