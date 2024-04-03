import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { SearchableSelect } from "@kws3/ui";
import SearchableSelectDecorator from "./SearchableSelect.svelte";
import { action } from "@storybook/addon-actions";
import playInteractions from "./searchableselect.play.js";

let args = {
  value: "",
  style: "",
  class: "",
  size: "",
  color: "",
  options: [],
  popper_strategy: "absolute",
  search_key: "name",
  value_key: "id",
  disabled: false,
  readonly: false,
};

export default {
  title: "Forms/Select/SearchableSelect (Async)",
  component: SearchableSelect,
  args: args,

  argTypes: {
    color: {
      control: {
        type: "select",
      },
    },

    size: {
      control: {
        type: "select",
      },
    },
  },
};

export const SearchableSelectAsync = {
  render: (args) => ({
    Component: SearchableSelectDecorator,
    props: args,
  }),

  name: "SearchableSelect (Async)",
  args: args,
  play: playInteractions,
};
