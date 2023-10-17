import AutoCompleteDecorator from "./AutoComplete.svelte";
import { AutoComplete } from "@kws3/ui";
import playInteractions from "./autocomplete.play.js";

let args = {
  value: "",
  style: "",
  class: "",
  size: "",
  color: "",
  options: [],
  search_strategy: "fuzzy",
  score_threshold: 5,
  disabled: false,
  readonly: false,
  placeholder: "Marvel characters...",
  highlighted_results: true,
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
  title: "Forms/AutoComplete/AutoComplete",
  component: AutoComplete,
  decorators: [() => AutoCompleteDecorator],
  args: args,
  argTypes: argTypes,
  play: playInteractions,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
  //play: playInteractions,
};
