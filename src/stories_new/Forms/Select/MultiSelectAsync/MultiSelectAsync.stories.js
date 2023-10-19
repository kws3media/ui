import { MultiSelect } from "@kws3/ui";
import MultiSelectDecorator from "./MultiSelect.svelte";
import playInteractions from "./multiselect.play.js";

let args = {
  value: [],
  style: "",
  class: "",
  size: "",
  color: "",
  options: [],
  search_key: "name",
  value_key: "id",
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
    control: { type: "select" },
  },
  size: {
    control: { type: "select" },
  },
};

export default {
  title: "Forms/Select/MultiSelect (Async)",
  component: MultiSelect,
  decorators: [() => MultiSelectDecorator],
  args: args,
  argTypes: argTypes,
  play: playInteractions,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
};