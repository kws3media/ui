import { MultiSelect } from "@kws3/ui";
import MultiSelectDecorator from "./MultiSelect.svelte";
import playInteractions from "./multiselect.play.js";
import { Colors, Sizes } from "@scripts/type_injector/frameworkTypes";

let args = {
  value: [],
  style: "",
  class: "",
  size: "",
  color: "",
  options: [],
  search_key: "name",
  value_key: "id",
  search_strategy: "fuzzy",
  score_threshold: 3,
  disabled: false,
  readonly: false,
  summary_mode: false,
  max: null,
  placeholder: "Choose a brand...",
  selected_icon: "check",
  no_options_msg: "No matching options",
  remove_all_tip: "Remove all",
  remove_btn_tip: "Remove",
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
  search_strategy: {
    control: "select",
    options: ["fuzzy", "strict"],
  },
};

export default {
  title: "Forms/Select/MultiSelect",
  component: MultiSelect,
  args: args,
  argTypes: argTypes,
  play: playInteractions,
};

export const Main = {
  name: "Canvas",
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
  decorators: [
    (_, { args }) => ({ Component: MultiSelectDecorator, props: args }),
  ],
};
