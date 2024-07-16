import Decorator from "./SlidingPaneSet.svelte";
import { SlidingPaneSet } from "@kws3/ui";

let args = {
  class: "",
  style: "height:150px;",
  vertical: false,
};

export default {
  title: "Standalone/SlidingPane/SlidingPaneSet",
  component: SlidingPaneSet,
  decorators: [(_, { args }) => ({ Component: Decorator, props: args })],
  args: args,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: {},
};
