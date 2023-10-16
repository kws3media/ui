import { Checkbox } from "@kws3/ui";

let args = {
  class: "",
  style: "",
  label_style: "",
  size: "",
  color: "",
  inverted: false,
  circle: false,
  checked: true,
  disabled: false,
  icon: "check",
  icon_family: null,
};

let argTypes = {
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

export default {
  title: "Forms/Controls/Checkbox",
  component: Checkbox,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
};
