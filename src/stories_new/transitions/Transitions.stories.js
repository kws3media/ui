import { Transition } from "@kws3/ui";
import TransitionDecorator from "./Transitions.svelte";
//import { withActions } from "@storybook/addon-actions/decorator";

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
  name: "Transitions",
  parameters: {
    layout: "fullscreen",
  },
  component: Transition,
  decorators: [
    (_, { args }) => ({ Component: TransitionDecorator, props: args }),
  ],
  args: args,
  argTypes: {
    type: { control: "select" },
  },
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: {},
};
