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
  disabled: false,
  readonly: false,
};

let argTypes = {
  color: {
    control: "select",
  },
  size: {
    control: "select",
  },
  search_strategy: {
    control: "select",
    options: ["fuzzy", "strict"],
  },
};

export default {
  title: "Forms/Select/SearchableSelect (Async)",
  component: SearchableSelect,
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
    (_, { args }) => ({ Component: SearchableSelectDecorator, props: args }),
  ],
};
