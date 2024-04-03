import { Colorpicker } from "@kws3/ui";
import { Sizes } from "@scripts/type_injector/frameworkTypes";

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
    options: Sizes,
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
