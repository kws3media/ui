import Decorator from "./Pagination.svelte";
import { Pagination } from "@kws3/ui";
import { Sizes } from "@scripts/type_injector/frameworkTypes";

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

let argTypes = {
  size: {
    control: "select",
    options: Sizes,
  },
};

export default {
  title: "Datagrid/Pagination",
  component: Pagination,
  parameters: {
    layout: "fullscreen",
    canvas: { hidden: true },
  },
  args: args,
  argTypes: argTypes,
};

export const Main = {
  args: args,
  argTypes: argTypes,
  decorators: [(_, { args }) => ({ Component: Decorator, props: args })],
};
