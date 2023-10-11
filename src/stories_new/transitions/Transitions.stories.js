import Decorator from "./Transitions.svelte";
import { Transition } from "@kws3/ui";

let args = {
  x: 0,
  y: 20,
  from: 0.5,
  to: 1,
  transition: true,
  type: "fly",
  duration: 300,
  delay: 0,
  easing: "",
  class: "",
};

export default {
  title: "Standalone/Transitions",
  component: Transition,
  args: args,
  argTypes: {},
};

export const Main = {
  name: "Transitions",
  args: args,
  argTypes: {},
};
