import Snackbars from "./Snackbars.svelte";
import {
  Colors,
  FloatiePositions,
} from "@scripts/type_injector/frameworkTypes";

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
    options: Colors,
  },
  position: {
    control: "select",
    options: FloatiePositions,
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
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
