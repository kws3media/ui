import Decorator from "./Canvas.svelte";
import { Pen, Eraser } from "@kws3/ui";

let args = {
  width: "400px",
  height: "200px",
  pen_width: 2,
  eraser_width: 6,
  pen_color: "#ff0000",
  background_image: "",
  readonly: false,
  disabled: false,
  has_controls: true,
  image: "",
  initial_scale: 1,
  expand_to: "center",
  expand_from :"center",
  expand_scale: 50,
  tools: {Pen, Eraser},
  actions: ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
  toolbar_placement: "bottom",
  control_position: "center",
  active_tool: "Pen",
  cy: "",
};

export default {
  title: "Canvas/Canvas",
  component: Decorator,
  args: args,
  argTypes: {},
};

export const Main = {
  args: args,
  argTypes: {},
};
