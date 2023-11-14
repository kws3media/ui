import { Message } from "@kws3/ui";
import MessageDecorator from "./Message.svelte";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

let args = {
  size: "",
  color: "info",
  class: "",
  style: "",
  inner_class: "",
  inner_style: "",
  title_class: "",
  title: "",
  has_title: false,
  dismissable: false,
  active: true,
};

let argTypes = {
  color: {
    control: "select",
    options: Colors,
  },
  size: {
    control: "select",
    options: Sizes,
  },
};

export default {
  title: "Helpers/Message",
  component: Message,
  decorators: [(_, { args }) => ({ Component: MessageDecorator, props: args })],
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
