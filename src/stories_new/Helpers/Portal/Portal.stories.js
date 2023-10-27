import { Portal } from "@kws3/ui";

let args = {
  target: "body",
};

let argTypes = {
  target: {
    control: "text",
  },
};

export default {
  title: "Helpers/Portal",
  component: Portal,
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
