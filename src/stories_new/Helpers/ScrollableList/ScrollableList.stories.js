import { ScrollableList } from "@kws3/ui";
import ScrollableListDecorator from "./ScrollableList.svelte";

let args = {
  items: [],
  start: 0,
  end: 0,
  height: "400px",
  item_height: null,
  class: "",
  end_threshold: 10,
  padding_threshold: 5,
  style: "",
};

let argTypes = {};

export default {
  title: "Helpers/ScrollableList",
  component: ScrollableList,
  decorators: [() => ScrollableListDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
