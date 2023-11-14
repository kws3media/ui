import { Radio } from "@kws3/ui";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

let args = {
  value: null,
  class: "",
  style: "",
  label_style: "",
  size: "",
  color: "",
  inverted: false,
  circle: false,
  disabled: false,
  group: null,
};

let argTypes = {
  color: {
    control: "select",
    options: Colors,
  },
  size: {
    control: "select",
    options: Sizes,
  },
};

export default {
  title: "Forms/Controls/Radio",
  component: Radio,
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
