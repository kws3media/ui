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
import { SearchInput } from "@kws3/ui";
import { products_reviews } from "./data.js";
import SearchInputDecorator from "./SearchInput.svelte";
import { action } from "@storybook/addon-actions";
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

export default {
  title: "Forms/SearchInput",
  component: SearchInput,
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

export const SearchInput = {
  render: (args) => ({
    Component: SearchInputDecorator,
    props: args,
  }),

  name: "SearchInput",
  args: args,
  play: playInteractions,
};
