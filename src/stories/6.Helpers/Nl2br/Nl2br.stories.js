import { Nl2br } from "@kws3/ui";

let args = {
  text: "This is a sample text\nAnd this is new line",
};

let argTypes = {};

export default {
  title: "Helpers/Nl2br",
  component: Nl2br,
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "centered",
  },
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
