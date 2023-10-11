import Decorator from "./Slidingpane.svelte";
import { SlidingPane } from "@kws3/ui";

let args = {
  active : false,
  class : "",
  style : "",
  v_center : true,
  h_center : true,
  track_height : true
};

export default {
  title: "Standalone/SlidingPane/SlidingPane",
  component: SlidingPane,
  args: args,
  argTypes: {},
};

export const Main = {
  name:"SlidingPane",
  args: args,
  component: SlidingPane,
  argTypes: {},
};

export const DecoratorStory = {
  name:"Decorator",
  args: args,
  component: Decorator,
  argTypes: {},
};
