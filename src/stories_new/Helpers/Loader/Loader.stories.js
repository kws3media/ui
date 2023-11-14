import { Loader } from "@kws3/ui";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

let args = {
  spinner_color: "grey",
  spinner_size: "medium",
  background_color: "transparent",
  background_size: "medium",
  class: "",
  style: "",
  is_inline: false,
  has_overlay: false,
};

let argTypes = {
  spinner_color: {
    control: "select",
    options: Colors,
  },
  spinner_size: {
    control: "select",
    options: Sizes,
  },
  background_color: {
    control: "select",
    options: Colors,
  },
};

export default {
  title: "Helpers/Loader",
  component: Loader,
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
