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
  search_key: "name",
  value_key: "id",
  search_strategy: "fuzzy",
  score_threshold: 3,
  disabled: false,
  readonly: false,
  popper_strategy: "absolute",
  options_loading: false,
  placeholder: "Choose a brand...",
  selected_icon: "check",
  no_options_msg: "No matching options",
  remove_all_tip: "Clear Selection",
};

export default {
  title: "Forms/Select/SearchableSelect",
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

    search_strategy: {
      control: {
        type: "select",
      },
    },
  },
};

export const SearchableSelect = {
  render: (args) => ({
    Component: SearchableSelectDecorator,
    props: args,
  }),

  name: "SearchableSelect",
  args: args,
  play: playInteractions,
};
