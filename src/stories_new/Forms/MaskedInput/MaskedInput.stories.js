import { MaskedInput } from "@kws3/ui";
import MaskedInputDecorator from "./MaskedInput.svelte";

let args = {
  mask: [],
  placeholder_char: "_",
  guide: true,
  guide_when_empty: false,
  guide_on_output: false,
  keep_char_positions: false,
  placeholder: "",
  class: "",
  value: "",
};

let argTypes = {};

export default {
  title: "Forms/MaskedInput",
  component: MaskedInput,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
  decorators: [
    (_, { args }) => ({ Component: MaskedInputDecorator, props: args }),
  ],
};
