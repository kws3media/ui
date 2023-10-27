import Notifications from "./Notifications.svelte";

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

let argTypes = {
  color: {
    control: "select",
  },
  position: {
    control: "select",
  },
};

export default {
  title: "Helpers/Floating UI/Notifications",
  component: Notifications,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
