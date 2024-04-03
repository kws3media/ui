import { Notification } from "@kws3/ui";
import NotificationDecorator from "./Notification.svelte";
import { Colors } from "@scripts/type_injector/frameworkTypes";

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
    options: Colors,
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
