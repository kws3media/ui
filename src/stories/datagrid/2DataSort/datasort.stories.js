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
import { DataSort } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import DataSortDecorator from "./DataSort.svelte";

let args = {
  options: [
    { name: "ID Newest First", value: "id DESC" },
    { name: "ID Oldest First", value: "id ASC" },
  ],
  sort_by: "",
};

export default {
  title: "Datagrid/DataSort",
  component: DataSort,
  args: args,
  argTypes: {},
};

export const DataSort = {
  render: (args) => ({
    Component: DataSortDecorator,
    props: args,
  }),

  name: "DataSort",
  args: args,
};
