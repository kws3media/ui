import AutoCompleteDecorator from "./AutoComplete.svelte";
import { AutoComplete } from "@kws3/ui";
import playInteractions from "./autocomplete.play.js";
import { Colors, Sizes } from "@scripts/type_injector/frameworkTypes";

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
    options: Colors,
  },
  size: {
    control: { type: "select" },
    options: Sizes,
  },
  search_strategy: {
    control: { type: "select" },
    options: ["fuzzy", "strict"],
  },
};

export default {
  title: "Forms/AutoComplete/AutoComplete",
  component: AutoComplete,
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
  decorators: [
    (_, { args }) => ({ Component: AutoCompleteDecorator, props: args }),
  ],
};
