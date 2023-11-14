import { Checkbox } from "@kws3/ui";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

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
    options: Colors,
  },
  size: {
    control: { type: "select" },
    options: Sizes,
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
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
};
