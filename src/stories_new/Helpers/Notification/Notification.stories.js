import { Notification } from "@kws3/ui";
import NotificationDecorator from "./Notification.svelte";

let args = {
  color: "info",
  class: "",
  style: "",
  light: false,
  dismissable: false,
  active: true,
};

let argTypes = {
  color: {
    control: "select",
  },
};

export default {
  title: "Helpers/Notification",
  component: Notification,
  decorators: [() => NotificationDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};