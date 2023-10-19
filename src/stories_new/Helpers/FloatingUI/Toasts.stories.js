import Toasts from "./Toasts.svelte";

let args = {
  message: "I am a toast, butter me!...",
  duration: 3000,
  color: "primary",
  light: false,
  position: "bottom",
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
  title: "Helpers/Floating UI/Toasts",
  component: Toasts,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
