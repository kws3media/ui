import { TimelineItem } from "@kws3/ui";
import ItemDecorator from "./TimelineItem.svelte";
import { Colors } from "@scripts/type_injector/frameworkTypes";

let args = {
  marker_icon: "",
  marker_image: "",
  color: "",
};

let argTypes = {
  color: {
    control: "select",
    options: Colors,
  },
};

export default {
  title: "Helpers/Timeline/TimelineItem",
  component: TimelineItem,
  decorators: [(_, { args }) => ({ Component: ItemDecorator, props: args })],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
