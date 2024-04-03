import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { Transition } from "@kws3/ui";
import TransitionDecorator from "./Transitions.svelte";
import { action } from "@storybook/addon-actions";

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

  argTypes: {
    type: {
      control: "select",
    },
  },
};

export const Transitions = {
  render: (args) => ({
    Component: TransitionDecorator,
    props: args,
  }),

  name: "Transitions",
  args: args,
};
