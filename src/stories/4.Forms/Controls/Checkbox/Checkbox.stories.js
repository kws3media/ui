import { Checkbox } from "@kws3/ui";
import {
  Colors,
  FontFamilies,
  Sizes,
} from "@scripts/type_injector/frameworkTypes";

let args = {
  class: "",
  style: "",
  label_style: "",
  size: "",
  color: "primary",
  inverted: false,
  circle: false,
  checked: false,
  disabled: false,
  icon: "check",
  icon_family: "fa",
};

let argTypes = {
  class: {},
  style: {},
  label_style: {},
  color: {
    control: "select",
    options: Colors,
  },
  size: {
    control: "select",
    options: Sizes,
  },
  inverted: {},
  circle: {},
  checked: {},
  disabled: {},
  icon: {},
  icon_family: {
    control: "select",
    options: FontFamilies,
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
