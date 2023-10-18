import { SearchInput } from "@kws3/ui";
import { products_reviews } from "./data.js";
import SearchInputDecorator from "./SearchInput.svelte";
import playInteractions from "./searchinput.play.js";

let args = {
  style: "",
  class: "",
  size: "",
  color: "",
  score_threshold: 2,
  disabled: false,
  readonly: false,
  placeholder: "Search reviews",
  highlighted_results: true,
  options: products_reviews,
  searchableKeys: ["review", "complain"],
  word_match: false,
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
  title: "Forms/SearchInput",
  component: SearchInput,
  decorators: [() => SearchInputDecorator],
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
