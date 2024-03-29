import { Timeline } from "@kws3/ui";

let args = {
  align: "left",
  class: "",
};

let argTypes = {
  align: {
    control: "select",
    options: ["left", "center", "right"],
  },
};

export default {
  title: "Helpers/Timeline/Timeline",
  component: Timeline,
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
