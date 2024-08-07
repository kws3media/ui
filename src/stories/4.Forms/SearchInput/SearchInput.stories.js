import { SearchInput } from "@kws3/ui";
import { products_reviews } from "./data.js";
import SearchInputDecorator from "./SearchInput.svelte";
import playInteractions from "./searchinput.play.js";
import { Colors, Sizes } from "@scripts/type_injector/frameworkTypes";

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
    control: "select",
    options: Colors,
  },
  size: {
    control: "select",
    optons: Sizes,
  },
};

export default {
  title: "Forms/SearchInput",
  component: SearchInput,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Canvas",
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
  decorators: [
    (_, { args }) => ({ Component: SearchInputDecorator, props: args }),
  ],
};
