import { TimelineItem } from "@kws3/ui";
import ItemDecorator from "./TimelineItem.svelte";

let args = {
  marker_icon: null,
  marker_image: null,
  color: "",
};

let argTypes = {
  color: {
    control: "select",
  },
};

export default {
  title: "Helpers/Timeline/TimelineItem",
  component: TimelineItem,
  decorators: [() => ItemDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
