import Decorator from "./Pagination.svelte";
import { Pagination } from '@kws3/ui';

let args = {
  meta : {},
  limit: 20,
  total: 120,
  count: 20,
  offset: 20,
  showTotal : true,
  showCurrent : true,
  showPerPage : true,
  maxVisiblePages : 10,
  entityName : "entries",
  size : "small",
  frame : false,
  iconRight : "chevron-right",
  iconLeft : "chevron-left",
  perPageOptions : [20, 50, 100, 150, 200, 250]
};

export default {
  title: "Datagrid/Pagination",
  component: Pagination,
  args: args,
  argTypes: {},
};

export const Main = {
  component: Decorator,
  args: args,
  argTypes: {},
};
