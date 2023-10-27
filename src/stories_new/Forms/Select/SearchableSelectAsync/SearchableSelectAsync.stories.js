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
    control: { type: "select" },
  },
  size: {
    control: { type: "select" },
  },
};

export default {
  title: "Forms/Select/SearchableSelect (Async)",
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
