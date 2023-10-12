import Decorator from "./Slidingpane.svelte";
import { SlidingPane } from "@kws3/ui";

let args = {
  active: false,
  class: "",
  style: "",
  v_center: true,
  h_center: true,
  track_height: true,
};

export default {
  title: "Standalone/SlidingPane/SlidingPane",
  component: SlidingPane,
  decorators: [() => Decorator, () => SlidingPane],
  args: args,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  component: SlidingPane,
  args: args,
  argTypes: {},
};
