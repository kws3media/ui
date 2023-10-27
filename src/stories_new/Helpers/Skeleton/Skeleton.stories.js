import { Skeleton } from "@kws3/ui";

let args = {
  class: "",
  lines: 1,
  width: "100%",
  height: "auto",
  radius: "0px",
  circle: false,
  color: "primary",
};

let argTypes = {};

export default {
  title: "Helpers/Skeleton",
  component: Skeleton,
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
