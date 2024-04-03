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
import { DeleteButton as Button } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import DeleteButtonDecorator from "./DeleteButton.svelte";
import playInteractions from "./deleteButton.play.js";

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

export const DeleteButton = {
  render: (args) => ({
    Component: DeleteButtonDecorator,
    props: args,
  }),

  name: "Delete Button",
  args: args,
  play: playInteractions,
};
