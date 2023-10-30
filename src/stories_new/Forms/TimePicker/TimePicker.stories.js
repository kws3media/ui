import { Timepicker } from "@kws3/ui";

let args = {
  value: "",
  style: "",
  class: "",
  placeholder: "Select Time..",
  disabled: false,
  time_24hr: false,
  min_time: "",
  max_time: "",
  options: {},
  ui_color: "primary",
  color: "",
  readonly: false,
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
  parameters: {
    layout: "centered",
  },
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
