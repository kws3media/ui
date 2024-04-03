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
import { Pagination } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import PaginationDecorator from "./Pagination.svelte";

let args = {
  meta: {},
  limit: 20,
  total: 120,
  count: 20,
  offset: 20,
  showTotal: true,
  showCurrent: true,
  showPerPage: true,
  maxVisiblePages: 10,
  entityName: "entries",
  size: "small",
  frame: false,
  iconRight: "chevron-right",
  iconLeft: "chevron-left",
  perPageOptions: [20, 50, 100, 150, 200, 250],
};

export default {
  title: "Datagrid/Pagination",
  component: Pagination,
  args: args,

  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
};

export const Pagination = {
  render: (args) => ({
    Component: PaginationDecorator,
    props: args,
  }),

  name: "Pagination",
  args: args,
};
