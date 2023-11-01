import Decorator from "./GridView.svelte";
import { GridView } from "@kws3/ui";

let args = {
  iteration_key: "id",
  data: [
    {
      id: 2,
      username: "user2",
      name: "User",
      surname: "Two",
      role: "U",
    },
    {
      id: 1,
      username: "user1",
      name: "User",
      surname: "One",
      role: "A",
    },
  ],
  columns: {
    id: "ID",
    name: "Name",
    surname: "Surname",
  },
  transition: false,
  class: "",
  is_striped: true,
  is_narrow: false,
  clickableRows: false,
  bulk_actions: false,
  selectAll: false,
  selectedIds: [],
  selectAllCheckboxColor: "primary",
  selectCheckboxColor: "info",
  selectCheckboxSize: "medium",
  valueTransformers: {},
  classTransformers: {},
  styleTransformers: {},
  visibilityMap: {},
  cellComponentMap: {},
};

export default {
  title: "Datagrid/GridView",
  component: GridView,
  args: args,
  argTypes: {},
};

export const Main = {
  tags: ["isHidden"],
  args: args,
  argTypes: {},
  decorators: [(_, { args }) => ({ Component: Decorator, props: args })],
};
