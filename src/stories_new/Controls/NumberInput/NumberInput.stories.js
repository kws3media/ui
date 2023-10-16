import { NumberInput } from "@kws3/ui";
import playInteractions from "./NumberInput.play";

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
  minus_icon: "minus",
  minus_icon_color: "danger",
  minus_button_color: "",
  plus_icon: "plus",
  plus_icon_color: "success",
  plus_button_color: "",
  input_only: false,
  force_integer: false,
};

let argTypes = {
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
};

export default {
  title: "Forms/Controls/NumberInput",
  component: NumberInput,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
};
