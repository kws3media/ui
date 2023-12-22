import { TimelineHeader } from "@kws3/ui";
import HeaderDecorator from "./TimelineHeader.svelte";
let args = {
  align: "left",
  class: "",
};

let argTypes = {
  align: {
    control: "select",
    options: ["left", "center", "right"],
  },
};

export default {
  title: "Helpers/Timeline/TimelineHeader",
  component: TimelineHeader,
  decorators: [(_, { args }) => ({ Component: HeaderDecorator, props: args })],
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