import { Loader } from "@kws3/ui";

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
  },
  spinner_size: {
    control: "select",
  },
  background_color: {
    control: "select",
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
