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
import { DataSearch } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import DataSearchDecorator from "./DataSearch.svelte";

let args = {
  hasSearch: true,
  hasFilters: false,
  placeholder: "Search",
  filters: {
    role: [
      { name: "Administrator", id: "A" },
      { name: "User", id: "U" },
    ],
    status: [
      { name: "Active", id: 1 },
      { name: "Disabled", id: 0 },
    ],
  },
  q: "",
  filter_in_use_class: "is-in-use",
  filter_not_in_use_class: "is-not-in-use",
  filterComponent: null,
  filter_label_map: {},
};

export default {
  title: "Datagrid/DataSearch",
  component: DataSearch,
  args: args,
  argTypes: {},
};

export const DataSearch = {
  render: (args) => ({
    Component: DataSearchDecorator,
    props: args,
  }),

  name: "DataSearch",
  args: args,
};
