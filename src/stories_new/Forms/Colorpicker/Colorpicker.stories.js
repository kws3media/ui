import { Colorpicker } from "@kws3/ui";

let args = {
  color: "000000",
  typeable: true,
  readonly: false,
  mini: false,
  disabled: false,
};

let argTypes = {
  size: {
    control: "select",
  },
};

export default {
  title: "Forms/Colorpicker",
  component: Colorpicker,
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
