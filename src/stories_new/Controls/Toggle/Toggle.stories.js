import { Toggle } from "@kws3/ui";

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
  },
  size: {
    control: "select",
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
