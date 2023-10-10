import Decorator from "./Example.svelte";

let args = {
  iteration_key : "id",
  data : [
    {
      "id": 1,
      "username": "user1",
      "name": "User",
      "surname": "One",
      "role": "U"
    },
    {
      "id": 2,
      "username": "user2",
      "name": "User",
      "surname": "Two",
      "role": "A"
    },
    {
      "id": 3,
      "username": "user3",
      "name": "User",
      "surname": "Three",
      "role": "U"
    },
    {
      "id": 4,
      "username": "user4",
      "name": "User",
      "surname": "Four",
      "role": "A"
    },
    {
      "id": 5,
      "username": "user5",
      "name": "User",
      "surname": "Five",
      "role": "U"
    },
    {
      "id": 6,
      "username": "user6",
      "name": "User",
      "surname": "Six",
      "role": "A"
    },
    {
      "id": 7,
      "username": "user7",
      "name": "User",
      "surname": "Seven",
      "role": "A"
    }
  ],
  transition : false,
  class: "",
  tileItemComponent : null,
  per_row : 3,
  fluid_items_per_row : false,
  min_width : "unset",
  max_width : "unset",
  grow : true,
  shrink : true,
  columns : {
    "id": "ID",
    "name": "Name",
    "surname": "Surname"
  },
  clickableRows : false,
  valueTransformers : {},
  classTransformers : {},
  styleTransformers : {},
  visibilityMap : {}
};

export default {
  title: "Datagrid/Example",
  component: Decorator,
  args: args,
  argTypes: {},
};

export const Main = {
  args: args,
  argTypes: {},
};
