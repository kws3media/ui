import { SearchableSelect } from "@kws3/ui";
import SearchableSelectDecorator from "./SearchableSelect.svelte";
import playInteractions from "./searchableselect.play.js";

let args = {
  value: "",
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
  options_loading: false,
  placeholder: "Choose a brand...",
  selected_icon: "check",
  no_options_msg: "No matching options",
  remove_all_tip: "Clear Selection",
};

let argTypes = {
  color: {
    control: { type: "select" },
  },
  size: {
    control: { type: "select" },
  },
  search_strategy: {
    control: { type: "select" },
  },
};

export default {
  title: "Forms/Select/SearchableSelect",
  component: SearchableSelect,
  decorators: [() => SearchableSelectDecorator],
  args: args,
  argTypes: argTypes,
  play: playInteractions,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
};
