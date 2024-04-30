import { Icon } from "@kws3/ui";
import IconDecorator from "./Icon.svelte";
import {
  Colors,
  Sizes,
  FontFamilies,
} from "@scripts/type_injector/frameworkTypes";

let args = {
  family: "",
  size: "",
  color: "primary",
  icon: "bookmark",
  class: "",
  style: "",
  inner_class: "",
  inner_style: "",
};

let argTypes = {
  color: {
    control: "select",
    options: Colors,
  },
  size: {
    control: "select",
    options: Sizes,
  },
  family: {
    control: "select",
    options: FontFamilies,
  },
};

export default {
  title: "Helpers/Icon",
  component: Icon,
  decorators: [(_, { args }) => ({ Component: IconDecorator, props: args })],
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
