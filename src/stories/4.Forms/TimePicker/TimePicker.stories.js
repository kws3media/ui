import { Timepicker } from "@kws3/ui";
import { Colors } from "@scripts/type_injector/frameworkTypes";

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
    control: "select",
    options: Colors,
  },
  color: {
    control: "select",
    options: Colors,
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
