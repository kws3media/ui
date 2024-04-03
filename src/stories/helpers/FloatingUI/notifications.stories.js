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
import Notifications from "./Notifications.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  title: "Heading",
  message: "I am a Notification...",
  duration: 3000,
  color: "primary",
  light: false,
  position: "top-right",
  dismissable: true,
  persistent: false,
  context: 1,
};

export default {
  title: "Helpers/Floating UI/Notifications",
  component: Notifications,
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

export const Notifications = {
  render: (args) => ({
    Component: Notifications,
    props: args,
  }),

  name: "Notifications",
  args: args,
};
