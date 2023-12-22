import { Datepicker } from "@kws3/ui";
import { Colors } from "@scripts/type_injector/frameworkTypes";

let args = {
  value: "",
  style: "",
  class: "",
  placeholder: "Select Date..",
  disabled: false,
  min_date: null,
  max_date: null,
  enable_dates: [],
  disable_dates: [],
  range_mode: false,
  options: {},
  calendar_color: "primary",
  color: "",
  readonly: false,
};

let argTypes = {
  calendar_color: {
    control: { type: "select" },
    options: Colors,
  },
  color: {
    control: { type: "select" },
    options: Colors,
  },
  range_mode: {},
};

export default {
  title: "Forms/Datepicker",
  component: Datepicker,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
