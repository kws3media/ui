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
import Snackbars from "./Snackbars.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  message: "I am a Snackbar...",
  duration: 3000,
  color: "primary",
  light: false,
  position: "bottom-right",
  persistent: false,
  buttons: ["Ok"],
  context: 1,
};

export default {
  title: "Helpers/Floating UI/Snackbars",
  component: Snackbars,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },

    position: {
      control: "select",
    },
  },
};

export const Snackbars = {
  render: (args) => ({
    Component: Snackbars,
    props: args,
  }),

  name: "Snackbars",
  args: args,
};
