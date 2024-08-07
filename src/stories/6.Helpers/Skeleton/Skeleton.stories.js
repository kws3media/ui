import { Skeleton } from "@kws3/ui";
import { ExtendedColors } from "@scripts/type_injector/frameworkTypes";

let args = {
  class: "",
  lines: 1,
  width: "100%",
  height: "auto",
  radius: "0px",
  circle: false,
  color: "",
};

let argTypes = {
  color: {
    control: "select",
    options: ExtendedColors,
  },
};

export default {
  title: "Helpers/Skeleton",
  component: Skeleton,
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "padded",
  },
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
