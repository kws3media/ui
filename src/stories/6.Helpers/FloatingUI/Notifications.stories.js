import Notifications from "./Notifications.svelte";
import {
  Colors,
  FloatiePositions,
} from "@scripts/type_injector/frameworkTypes";

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
    options: Colors,
  },
  position: {
    control: "select",
    options: FloatiePositions,
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
  args: args,
  argTypes: argTypes,
  props: args,
};
