import { Timeline } from "@kws3/ui";
import FullDecorator from "./Timeline.svelte";

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
  title: "Helpers/Timeline/Timeline Full Example",
  component: Timeline,
  decorators: [() => FullDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
