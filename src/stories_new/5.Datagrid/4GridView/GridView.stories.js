import Decorator from "./GridView.svelte";
import { GridView } from "@kws3/ui";

let args = {
  iteration_key: "id",
  data: [
    {
      id: 5,
      username: "user5",
      name: "User",
      surname: "Five",
      role: "U",
    },
    {
      id: 4,
      username: "user4",
      name: "User",
      surname: "Four",
      role: "U",
    },
    {
      id: 3,
      username: "user3",
      name: "User",
      surname: "Three",
      role: "U",
    },
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
  clickableRows: true,
  bulk_actions: true,
  selectAll: false,
  selectedIds: [2],
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
