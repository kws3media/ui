import Decorator from "./DataSort.svelte";
import { DataSort } from "@kws3/ui";

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

export const Main = {
  args: args,
  argTypes: {},
  decorators: [(_, { args }) => ({ Component: Decorator, props: args })],
};
