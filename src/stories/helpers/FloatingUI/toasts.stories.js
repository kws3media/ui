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
import Toasts from "./Toasts.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  message: "I am a toast, butter me!...",
  duration: 3000,
  color: "primary",
  light: false,
  position: "bottom",
  context: 1,
};

export default {
  title: "Helpers/Floating UI/Toasts",
  component: Toasts,
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

export const Toasts = {
  render: (args) => ({
    Component: Toasts,
    props: args,
  }),

  name: "Toasts",
  args: args,
};
