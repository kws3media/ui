import { Skeleton } from "@kws3/ui";
import { Colors } from "@scripts/type_injector/frameworkTypes";

let args = {
  class: "",
  lines: 1,
  width: "100%",
  height: "auto",
  radius: "0px",
  circle: false,
  color: "primary",
};

let argTypes = {
  color: {
    control: "select",
    options: Colors,
  },
};

export default {
  title: "Helpers/Skeleton",
  component: Skeleton,
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
