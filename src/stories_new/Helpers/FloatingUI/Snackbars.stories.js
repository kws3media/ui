import Snackbars from "./Snackbars.svelte";

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

let argTypes = {
  color: {
    control: "select",
  },
  position: {
    control: "select",
  },
};

export default {
  title: "Helpers/Floating UI/Snackbars",
  component: Snackbars,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
