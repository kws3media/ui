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
import { RangeSlider } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  class: "",
  style: "",
  size: "",
  color: "",
  output: true,
  disabled: false,
  circle: false,
  tooltip: false,
};

export default {
  title: "Forms/Controls/Range Slider",
  component: RangeSlider,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },

    size: {
      control: "select",
    },
  },
};

export const RangeSlider = {
  render: (args) => ({
    Component: RangeSlider,
    props: args,

    on: {
      change: action("Changed"),
    },
  }),

  name: "Range Slider",
  args: args,
};
