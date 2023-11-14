import { Toggle } from "@kws3/ui";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

let args = {
  on: false,
  disabled: false,
  color: "",
  class: "",
  on_text: "",
  off_text: "",
  size: "",
  cy: "",
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
  title: "Forms/Controls/Toggle",
  component: Toggle,
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
