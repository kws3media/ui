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
import { MultiSelect } from "@kws3/ui";
import MultiSelectDecorator from "./MultiSelect.svelte";
import { action } from "@storybook/addon-actions";
import playInteractions from "./multiselect.play.js";

let args = {
  value: [],
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
  summary_mode: false,
  max: null,
  placeholder: "Choose a brand...",
  selected_icon: "check",
  no_options_msg: "No matching options",
  remove_all_tip: "Remove all",
  remove_btn_tip: "Remove",
};

export default {
  title: "Forms/Select/MultiSelect",
  component: MultiSelect,
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

export const MultiSelect = {
  render: (args) => ({
    Component: MultiSelectDecorator,
    props: args,
  }),

  name: "MultiSelect",
  args: args,
  play: playInteractions,
};
