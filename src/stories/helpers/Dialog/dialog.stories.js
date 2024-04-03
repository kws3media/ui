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
import Dialog from "./Dialog.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  title: "",
  help_text: "",
  size: "small",
  input_value: "",
  icon: "",
  icon_color: "primary",
  icon_size: "",
  ok_button_text: "Ok",
  ok_button_icon: "check",
  cancel_button_text: "Cancel",
  cancel_button_icon: "ban",
};

export default {
  title: "Helpers/Dialog",
  component: Dialog,
  args: args,

  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },

    icon_color: {
      control: {
        type: "select",
      },
    },

    icon_size: {
      control: {
        type: "select",
      },
    },

    ok_button_color: {
      control: {
        type: "select",
      },
    },

    cancel_button_color: {
      control: {
        type: "select",
      },
    },
  },
};

export const Dialog = {
  render: (args) => ({
    Component: Dialog,
    props: args,
  }),

  name: "Dialog",
  args: args,
};
