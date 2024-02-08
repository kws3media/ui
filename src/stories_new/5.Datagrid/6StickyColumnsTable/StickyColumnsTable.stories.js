import Decorator from "./StickyColumnsTable.svelte";
import { StickyColumnsTableWrapper } from "@kws3/ui";

let args = {
  inner_class: "",
  outer_class: "",
  width: "1200px",
};

export default {
  title: "Datagrid/Sticky Columns Table",
  component: StickyColumnsTableWrapper,
  args: args,
  argTypes: {},
};

export const Main = {
  tags: ["isHidden"],
  args: args,
  argTypes: {},
  decorators: [(_, { args }) => ({ Component: Decorator, props: args })],
};
