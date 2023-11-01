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
  decorators: [
    (_, { args }) => ({ Component: NotificationDecorator, props: args }),
  ],
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
  props: args,
};
