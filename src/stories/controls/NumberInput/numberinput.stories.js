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
import { NumberInput } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import playInteractions from "./numberinput.play.js";

let args = {
  class: "",
  style: "",
  input: null,
  value: 0,
  step: 1,
  min: 0,
  max: 100,
  disabled: false,
  fullwidth: false,
  typeable: true,
  input_class: "",
  minus_icon: "minus",
  minus_icon_color: "danger",
  minus_button_color: "",
  plus_icon: "plus",
  plus_icon_color: "success",
  plus_button_color: "",
  input_only: false,
  force_integer: false,
};

export default {
  title: "Forms/Controls/NumberInput",
  component: NumberInput,
  args: args,

  argTypes: {
    size: {
      control: "select",
    },

    minus_icon: {},

    minus_icon_color: {
      control: "select",
    },

    minus_button_color: {
      control: "select",
    },

    plus_icon: {},

    plus_icon_color: {
      control: "select",
    },

    plus_button_color: {
      control: "select",
    },
  },
};

export const NumberInput = {
  render: (args) => ({
    Component: NumberInput,
    props: args,

    on: {
      change: action("Changed"),
      focus: action("Focused"),
      blur: action("Blurred"),
    },
  }),

  name: "NumberInput",
  args: args,
  play: playInteractions,
};
