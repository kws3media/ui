import { Transition } from "@kws3/ui";
import TransitionDecorator from "./Transitions.svelte";

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

// const withLocale = ({ args }) => {
//   return TransitionDecorator;
// };

export default {
  title: "Standalone/Transitions",
  name: "Transitions",
  parameters: {
    layout: "fullscreen",
    docs: {},
    canvas: { hidden: true },
  },
  component: Transition,
  decorators: [() => TransitionDecorator],
  args: args,
  argTypes: {
    type: { control: "select" },
  },
};

export const Main = {
  name: "Preview",
  component: Transition,
  args: args,
};
