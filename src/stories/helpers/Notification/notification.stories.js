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
import { Notification } from "@kws3/ui";
import NotificationDecorator from "./Notification.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  color: "info",
  class: "",
  style: "",
  light: false,
  dismissable: false,
  active: true,
};

export default {
  title: "Helpers/Notification",
  component: Notification,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },
  },
};

export const Notification = {
  render: (args) => ({
    Component: NotificationDecorator,
    props: args,
  }),

  name: "Notification",
  args: args,
};
