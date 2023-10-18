import { Timepicker } from "@kws3/ui";

let args = {
  class: {},
  style: {},
  label_style: {},
  color: {
    control: { type: "select" },
  },
  size: {
    control: { type: "select" },
  },
  inverted: {},
  circle: {},
  checked: {},
  disabled: {},
  icon: {},
  icon_family: {
    control: { type: "select" },
  },
};

let argTypes = {
  ui_color: {
    control: { type: "select" },
  },
  color: {
    control: { type: "select" },
  },
  time_24hr: {},
};

export default {
  title: "Forms/Timepicker",
  component: Timepicker,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
