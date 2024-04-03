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
  disabled: false,
  readonly: false,
  options_loading: false,
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
  title: "Forms/AutoComplete/AutoComplete (Async)",
  component: AutoComplete,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Canvas",
  //tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
  play: playInteractions,
  decorators: [
    (_, { args }) => ({ Component: AutoCompleteDecorator, props: args }),
  ],
};
