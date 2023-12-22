import { InfiniteList } from "@kws3/ui";
import InfiniteListDecorator from "./InfiniteList.svelte";
let args = {
  items: [],
  height: "400px",
  class: "",
  end_offset: 400,
  style: "",
};

let argTypes = {};

export default {
  title: "Helpers/InfiniteList",
  component: InfiniteList,
  decorators: [
    (_, { args }) => ({ Component: InfiniteListDecorator, props: args }),
  ],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
