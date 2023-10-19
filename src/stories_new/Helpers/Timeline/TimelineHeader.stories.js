import { TimelineHeader } from "@kws3/ui";
import HeaderDecorator from "./TimelineHeader.svelte";
let args = {
  align: "left",
  class: "",
};

let argTypes = {
  align: {
    control: "select",
  },
};

export default {
  title: "Helpers/Timeline/TimelineHeader",
  component: TimelineHeader,
  decorators: [() => HeaderDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
