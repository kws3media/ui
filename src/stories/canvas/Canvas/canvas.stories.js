import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import Version from "~/version.mdx";
import dedent from "ts-dedent";
import { Canvas as KWS3Canvas, Pen, Eraser } from "@kws3/ui";
import CanvasDecorator from "./Canvas.svelte";
import { action } from "@storybook/addon-actions";

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
  expand_from: "center",
  expand_scale: 50,
  tools: { Pen, Eraser },
  actions: ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
  toolbar_placement: "bottom",
  control_position: "center",
  active_tool: "Pen",
  cy: "",
};

export default {
  title: "Canvas/Canvas",
  component: KWS3Canvas,
  args: args,

  argTypes: {
    active_tool: {
      control: "select",
    },

    control_position: {
      control: "select",
    },

    toolbar_placement: {
      control: "select",
    },
  },
};

export const Canvas = {
  render: (args) => ({
    Component: CanvasDecorator,
    props: args,
  }),

  name: "Canvas",
  args: args,
};
