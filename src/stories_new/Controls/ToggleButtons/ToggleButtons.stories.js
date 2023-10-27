import { ToggleButtons } from "@kws3/ui";

let args = {
  value: "",
  disabled: false,
  options: [
    { name: "Yes", value: 1, icon: "check-circle", subtitle: "Affirmative" },
    { name: "No", value: 0, icon: "ban", subtitle: "Negative" },
    { name: "Maybe", value: null, icon: "question", subtitle: "¯_(ツ)_/¯" },
  ],
  class: "",
  inner_class: "",
  active_class: "is-primary",
  inactive_class: "is-outlined",
  size: "",
  fullwidth: false,
};

let argTypes = {
  size: {
    control: "select",
  },
};

export default {
  title: "Forms/Controls/ToggleButtons",
  component: ToggleButtons,
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
