import Toasts from "./Toasts.svelte";
import {
  Colors,
  FloatiePositions,
} from "../../../../scripts/type_injector/frameworkTypes";

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
    options: Colors,
  },
  position: {
    control: "select",
    options: FloatiePositions,
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
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
