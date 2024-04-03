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
import { AutoComplete } from "@kws3/ui";
import AutoCompleteDecorator from "./AutoComplete.svelte";
import { action } from "@storybook/addon-actions";
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
  popper_strategy: "absolute",
};

export default {
  title: "Forms/AutoComplete/AutoComplete",
  component: AutoComplete,
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

export const AutoComplete = {
  render: (args) => ({
    Component: AutoCompleteDecorator,
    props: args,
  }),

  name: "AutoComplete",
  args: args,
  play: playInteractions,
};
