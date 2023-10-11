import Decorator from "./Slidingpane.svelte";
import { SlidingPaneSet } from "@kws3/ui";

let args = {
  class : "",
  style : "height:150px;",
  vertical : false
};

export default {
  title: "Standalone/SlidingPane/SlidingPaneSet",
  component: SlidingPaneSet,
  decorator:Decorator,
  args: args,
  argTypes: {},
};

export const Main = {
  args: args,
  component: Decorator,
  argTypes: {},
};
