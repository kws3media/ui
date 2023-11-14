import { RangeSlider } from "@kws3/ui";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

let args = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  class: "",
  style: "",
  size: "",
  color: "",
  output: true,
  disabled: false,
  circle: false,
  tooltip: false,
};

let argTypes = {
  color: {
    control: "select",
    optons: Colors,
  },
  size: {
    control: "select",
    options: Sizes,
  },
};

export default {
  title: "Forms/Controls/Range Slider",
  component: RangeSlider,
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
